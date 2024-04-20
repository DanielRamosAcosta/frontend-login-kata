export class DomainError extends Error {
  public readonly code: string;

  constructor(code: string) {
    super(code);
    this.code = code;
  }
}
