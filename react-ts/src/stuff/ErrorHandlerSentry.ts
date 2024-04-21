import { ErrorHandler } from "./ErrorHandler.ts";
import * as Sentry from "@sentry/react";

export class ErrorHandlerSentry implements ErrorHandler {
  handle(error: Error): void {
    Sentry.captureException(error);
  }
}
