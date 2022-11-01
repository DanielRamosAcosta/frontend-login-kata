import { useEffect, useState } from "react";
import "./Login.css";
import { EmailField } from "../components/EmailField.jsx";
import { PasswordField } from "../components/PasswordField.jsx";
import { Title } from "../components/Title";
import { Button } from "../components/Button";
import { translateError } from "../utils/translateError.js";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  useEffect(() => {
    setErrorMessage(null);
  }, [email, password]);

  return (
    <main className="login-container">
      <form
        className="login-form"
        onSubmit={(event) => {
          event.preventDefault();
          fetch("http://localhost:8000/api/users", {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((response) => response.json())
            .then((data) => {
              if (data.status === "error") {
                throw new Error(data.code);
              }
            })
            .then(() => {
              setSignUpSuccess(true);
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        }}
      >
        <Title>Sign up with email</Title>
        <p>Enter your email address to create an account.</p>

        {signUpSuccess && <p>You have successfully been registered</p>}
        {!signUpSuccess && (
          <>
            <EmailField
              id="email"
              labelText="Your email"
              value={email}
              onChange={setEmail}
            />
            <PasswordField
              id="password"
              labelText="Your password"
              value={password}
              onChange={setPassword}
            />
            {errorMessage && <p>{translateError(errorMessage)}</p>}
            <Button title="Register" />
          </>
        )}
      </form>
    </main>
  );
};
