import { Token } from "./Token.ts";
import { TranslationServiceI18Next } from "./TranslationServiceI18Next.ts";
import { interfaces } from "inversify";
import { UseTranslationResponse } from "react-i18next";

export const TranslationServiceProvider = {
  token: Token.TRANSLATION_SERVICE,
  useFactory({ container }: interfaces.Context) {
    const translation = container.get<
      UseTranslationResponse<"translation", undefined>
    >(Token.I18NEXT);

    return new TranslationServiceI18Next(translation);
  },
};
