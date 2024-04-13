import { TokenRepository } from "./TokenRepository.ts";
import { FAKE_JWT } from "./AuthServiceFake.ts";

export class TokenRepositoryFake implements TokenRepository {
  saveToken(jwt: string) {}

  getTokenOrFail(): string {
    return FAKE_JWT;
  }
}
