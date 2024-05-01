import { TokenRepository } from "./TokenRepository.ts";
import { FAKE_JWT } from "./AuthServiceFake.ts";
import { waitFor } from "@testing-library/dom";
import { expect } from "vitest";

export class TokenRepositoryFake implements TokenRepository {
  private savedToken = "";

  saveToken(jwt: string) {
    this.savedToken = jwt;
  }

  getTokenOrFail(): string {
    return FAKE_JWT;
  }

  async expectTokenToHaveBeenSaved() {
    await waitFor(() => {
      expect(this.savedToken).toBe(FAKE_JWT);
    });
  }
}
