import { createRoot } from "react-dom/client";
import {loadMagentoMegaMenu} from "../adapters/magento/loadMagentoMenu.ts";
import {MegamenuWidget} from "../MegamenuWidget.tsx";

export async function mountMagento(hostElement: HTMLElement) {
    // Create shadow DOM
    const shadow =
        hostElement.shadowRoot || hostElement.attachShadow({ mode: "open" });

    // Create React root inside shadow
    const root = createRoot(shadow);
    root.render(<MegamenuWidget items={[]} loading />);

    const categories = await loadMagentoMegaMenu();

    root.render(<MegamenuWidget items={categories} />);
}