import { createRoot } from "react-dom/client";
import {MegamenuWidget} from "./MegamenuWidget.tsx";
import {activity} from "./activity";
import {getMountedHost} from "./lib/hostReader.ts";

export const WIDGET_ID = 'megamenu';

import './styles/megamenu.css'
import type {ResolvedMegamenuConfig} from "./domain/megamenu.types.ts";

export async function mountWidget(hostElement: HTMLElement, config?: ResolvedMegamenuConfig) {
    const mountedHost = getMountedHost(hostElement);

    activity('bootstrap', 'Widget mounted', hostElement);

    const root = createRoot(mountedHost);
    root.render(<MegamenuWidget rawConfig={config} />);
}
