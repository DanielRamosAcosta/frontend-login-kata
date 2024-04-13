import { AuthService } from "./AuthService.ts";

export const FAKE_JWT = "fake-jwt";

export class AuthServiceFake implements AuthService {
  async login() {
    return { jwt: FAKE_JWT };
  }
}
