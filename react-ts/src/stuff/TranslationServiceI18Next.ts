import { UseTranslationResponse } from "react-i18next";
import { TranslationService } from "./TranslationService.ts";

export class TranslationServiceI18Next implements TranslationService {
  constructor(
    private readonly translation: UseTranslationResponse<
      "translation",
      undefined
    >,
  ) {}

  translate(key: string): string {
    return this.translation.t(key);
  }
}
