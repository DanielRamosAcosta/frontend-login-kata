import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node"; // or cloudflare/deno
import { json, redirect } from "@remix-run/node"; // or cloudflare/deno
import { useLoaderData } from "@remix-run/react";
import { commitSession, getSession } from "~/sessions";
import { Title } from "~/components/Title";
import { Button } from "~/components/Button";
import { PasswordField } from "~/components/PasswordField";
import { EmailField } from "~/components/EmailField";

import "~/styles/login.css";
import { translateError } from "~/utils/translateError";

async function validateCredentials(
  email: FormDataEntryValue | null,
  password: FormDataEntryValue | null,
): Promise<string> {
  const response = await fetch(
    "https://backend-login-placeholder.deno.dev/api/users/login",
    {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  const data = await response.json();

  if (data.status === "error") {
    throw new Error(data.code);
  }

  const jwt = data.payload.jwt;
  const payload = atob(jwt.split(".")[1]);
  return JSON.parse(payload).userId;
}

export async function loader({ request }: LoaderFunctionArgs) {
  const session = await getSession(request.headers.get("Cookie"));

  if (session.has("userId")) {
    // Redirect to the home page if they are already signed in.
    return redirect("/");
  }

  const data = { error: session.get("error") };

  return json(data, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}

export async function action({ request }: ActionFunctionArgs) {
  const session = await getSession(request.headers.get("Cookie"));
  const form = await request.formData();
  const email = form.get("email");
  const password = form.get("password");

  let userId = "";

  try {
    userId = await validateCredentials(email, password);
  } catch (error) {
    if (!(error instanceof Error)) {
      throw error;
    }

    session.flash("error", error.message);

    return redirect("/login", {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    });
  }

  session.set("userId", userId);

  // Login succeeded, send them to the home page.
  return redirect("/", {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}

export default function Login() {
  const { error } = useLoaderData<typeof loader>();

  return (
    <main className="login-container">
      <form method="POST" className="login-form">
        <Title>Login with email</Title>
        <p>Enter your email address to login with your account.</p>

        <EmailField id="email" labelText="Your email" />
        <PasswordField id="password" labelText="Your password" />
        {error && <p>{translateError(error)}</p>}
        <Button title="Login" />
      </form>
    </main>
  );
}
