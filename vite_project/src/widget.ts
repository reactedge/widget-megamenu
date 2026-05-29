import {mountWidget} from "./mountWidget.tsx";
import {WIDGET_ID} from "./Config.ts";

import "./styles/widget.css"
import type {ResolvedMegamenuConfig} from "./domain/megamenu.types.ts";

const mount = async (el: HTMLElement, config: ResolvedMegamenuConfig) => {
    await mountWidget(el, config)
}

const api = { mount };

(window as any)[`ReactEdge_${WIDGET_ID}`] = api;

export { mount };