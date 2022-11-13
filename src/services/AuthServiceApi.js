export class AuthServiceApi {
  signUp(email, password) {
    return fetch("https://backend-login-placeholder.deno.dev/api/users", {
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
      });
  }
}
