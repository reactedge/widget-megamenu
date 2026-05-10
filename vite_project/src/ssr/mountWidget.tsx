import {activity} from "../activity";
import {hydrateRoot} from "react-dom/client";
import type {ResolvedMegamenuConfig} from "../domain/megamenu.types.ts";
import {MegamenuWidget} from "../MegamenuWidget.tsx";

export async function mountWidget(hostElement: HTMLElement, config: ResolvedMegamenuConfig) {
    const mountedHost = hostElement;

    activity('bootstrap', 'Widget mounted', hostElement);

    hydrateRoot(
        mountedHost,
        <MegamenuWidget rawConfig={config} />
    );
}
