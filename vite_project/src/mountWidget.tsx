import { createRoot } from "react-dom/client";
import {MegamenuWidget} from "./MegamenuWidget.tsx";
import {activity} from "./activity";
import {getMountedHost} from "./lib/hostReader.ts";

export const WIDGET_ID = 'megamenu';

import './styles/megamenu.css'

export async function mountWidget(hostElement: HTMLElement) {
    const mountedHost = getMountedHost(hostElement);

    activity('bootstrap', 'Widget mounted', hostElement);

    const root = createRoot(mountedHost);
    root.render(<MegamenuWidget host={hostElement} />);
}
