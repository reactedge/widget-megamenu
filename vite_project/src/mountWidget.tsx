import { createRoot } from "react-dom/client";
import {loadMagentoMegaMenu} from "./adapters/magento/loadMagentoMenu.ts";
import {MegamenuWidget} from "./MegamenuWidget.tsx";
import type {NavItem} from "./contracts/NavItem.ts";
import { storeFinderStyles } from "./styles/megamenu.styles";
import {injectStyles} from "./lib/style.ts";

export async function mountWidget(hostElement: HTMLElement) {
    // Create shadow DOM
    const shadow =
        hostElement.shadowRoot || hostElement.attachShadow({ mode: "open" });

    for (const css of storeFinderStyles) {
        injectStyles(shadow, css);
    }

    const root = createRoot(shadow);

    // Create React root inside shadow
    const host = hostElement.getAttribute("data-host");

    if (host === 'magento') {
        root.render(<MegamenuWidget items={[]} loading />);
        const items = await loadMagentoMegaMenu();
        root.render(<MegamenuWidget items={items} />);
    }

    if (host === 'wordpress') {
        const raw = hostElement.getAttribute("data-items");
        const items: NavItem[] = raw ? JSON.parse(raw) : [];

        root.render(<MegamenuWidget items={items} />);
    }
}
