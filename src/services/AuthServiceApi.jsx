export class AuthServiceApi {
  signup(email, password) {
    return fetch("http://localhost:8000/api/users", {
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
