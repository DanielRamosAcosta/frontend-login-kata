import { AuthService } from "./AuthService.js";

export class AuthServiceFake extends AuthService {
  async signUp(email, password) {
    return { status: "ok" };
  }
}
