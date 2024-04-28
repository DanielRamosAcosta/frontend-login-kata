import { ErrorHandler } from "./ErrorHandler.ts";

export class ErrorHandlerLog implements ErrorHandler {
  handle(error: Error): void {
    console.error("Log error handler", error);
  }
}
