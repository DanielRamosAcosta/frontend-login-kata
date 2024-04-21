import { AuthService } from "./AuthService.ts";
import { DomainError } from "../errors/DomainError.ts";

export class AuthServiceFetch implements AuthService {
  async login(email: string, password: string) {
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
      throw new DomainError(data.code);
    }

    return data.payload;
  }
}
