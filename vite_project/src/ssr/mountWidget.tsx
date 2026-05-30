import {hydrateRoot} from "react-dom/client";
import type {ResolvedMegamenuConfig} from "../domain/megamenu.types.ts";
import {WidgetWrapper} from "../WidgetWrapper.tsx";

export async function mountWidget(hostElement: HTMLElement, config: ResolvedMegamenuConfig) {
    const mountedHost = hostElement;

    hydrateRoot(
        mountedHost,
        <WidgetWrapper rawConfig={config} />
    );
}
