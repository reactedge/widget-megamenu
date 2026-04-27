import {mountWidget, WIDGET_ID} from "./mountWidget";
import {loadMagentoFonts} from "./services/fontLoader.ts";
import {loadTranslations} from "./services/translationLoader.ts";
import type {ResolvedMegamenuConfig} from "./domain/megamenu.types.ts";

const mount = async (el: HTMLElement, config?: ResolvedMegamenuConfig) => {
    loadMagentoFonts();
    loadTranslations(el);

    await mountWidget(el, config)
}

const api = { mount };

(window as any)[`ReactEdge_${WIDGET_ID}`] = api;

export { mount };