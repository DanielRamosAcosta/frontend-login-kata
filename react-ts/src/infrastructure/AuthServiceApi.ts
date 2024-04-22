import { AuthService } from "../domain/AuthService.ts";

export class AuthServiceApi implements AuthService {
  async login(email: string, password: string): Promise<string> {
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

    return data.payload.jwt;
  }
}
