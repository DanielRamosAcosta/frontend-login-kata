export interface TokenRepository {
  save(token: string): void;
  find(): string | null;
}
