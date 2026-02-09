// mounts/mountWordPress.ts
import { createRoot } from "react-dom/client";
import type {NavItem} from "../contracts/NavItem.ts";
import {MegamenuWidget} from "../MegamenuWidget.tsx";

export function mountWordPress(hostElement: HTMLElement) {
    const shadow =
        hostElement.shadowRoot || hostElement.attachShadow({ mode: "open" });

    const root = createRoot(shadow);

    const raw = hostElement.getAttribute("data-items");
    const items: NavItem[] = raw ? JSON.parse(raw) : [];

    root.render(<MegamenuWidget items={items} />);
}
