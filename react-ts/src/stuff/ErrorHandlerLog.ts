import { ErrorHandler } from "./ErrorHandler.ts";

export class ErrorHandlerLog implements ErrorHandler {
  handle(error: Error): void {
    console.error("Sentry error handler", error);
  }
}
