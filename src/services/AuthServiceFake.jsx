import { AuthService } from "./AuthService.jsx";

export class AuthServiceFake extends AuthService {
  async signup(email, password) {
    return { status: "ok" };
  }
}
