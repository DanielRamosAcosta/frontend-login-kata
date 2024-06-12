import { describe, it, expect } from "vitest";
import { TokenRepositoryLocalStorage } from "./TokenRepositoryLocalStorage.ts";

describe("TokenRepositoryLocalStorage", () => {
  it("saves the token in the repository", () => {
    const token = "thisIsTheToken";
    const tokenRepository = new TokenRepositoryLocalStorage();

    tokenRepository.save(token);

    expect(tokenRepository.find()).toBe(token);
  });
});
