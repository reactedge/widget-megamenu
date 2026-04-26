import { mountWidget } from "./mountWidget";
import {loadMagentoFonts} from "./services/fontLoader.ts";
import {loadTranslations} from "./services/translationLoader.ts";

class MegamenuUIWidget extends HTMLElement {
    connectedCallback() {
        loadMagentoFonts();
        loadTranslations(this);
        mountWidget(this);
    }
}

customElements.define("megamenu-widget", MegamenuUIWidget);
