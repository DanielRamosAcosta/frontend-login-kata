import { useDependencies } from "../injection/DependenciesContext.ts";
import { TranslationService } from "../stuff/TranslationService.ts";
import { Token } from "../stuff/Token.ts";

export function useTranslation() {
  const container = useDependencies();
  const translationService = container.get<TranslationService>(
    Token.TRANSLATION_SERVICE,
  );
  const t = (key: string) => translationService.translate(key);
  return { t };
}
