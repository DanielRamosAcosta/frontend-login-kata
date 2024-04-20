import { createContainer } from "./createContainer.ts";
import { TranslationServiceFake } from "../stuff/TranslationServiceFake.ts";

export const e2eContainer = createContainer({
  translationService: () => new TranslationServiceFake(),
});
