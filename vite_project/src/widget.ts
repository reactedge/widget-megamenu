import { mountWidget } from "./mountWidget";
import {loadMagentoFonts} from "./services/fontLoader.ts";
import {loadTranslations} from "./services/translationLoader.ts";
import type {ResolvedMegamenuConfig} from "./domain/megamenu.types.ts";

export async function mount(el: HTMLElement, config?: ResolvedMegamenuConfig) {
    loadMagentoFonts();
    loadTranslations(el);

    await mountWidget(el, config)
}
