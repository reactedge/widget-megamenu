import {createRoot} from "react-dom/client";
import React from "react";
import {activity} from "./activity";
import {WidgetWrapper} from "./WidgetWrapper.tsx";
import {getMountedHost} from "./lib/hostReader.ts";
import type {ResolvedMegamenuConfig} from "./domain/megamenu.types.ts";

export async function mountWidget(hostElement: HTMLElement, config: ResolvedMegamenuConfig) {
    const mountedHost = getMountedHost(hostElement);

    activity('bootstrap', 'Widget mounted', hostElement);

    createRoot(mountedHost).render(<WidgetWrapper rawConfig={config} />);
}
