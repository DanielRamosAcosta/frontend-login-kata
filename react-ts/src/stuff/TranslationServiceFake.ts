import { TranslationService } from "./TranslationService.ts";

export class TranslationServiceFake implements TranslationService {
  translate(key: string): string {
    return key;
  }
}
