export interface TokenRepository {
  saveToken(jwt: string): void;

  getTokenOrFail(): string;
}
