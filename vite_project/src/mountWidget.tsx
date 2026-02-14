import { createRoot } from "react-dom/client";
import {loadMagentoMegaMenu} from "./adapters/magento/loadMagentoMenu.ts";
import {MegamenuWidget} from "./MegamenuWidget.tsx";
import {extractConfig} from "./services/configLoader.ts";
import {activity} from "./activity";
import {getMountedHost} from "./lib/hostReader.ts";
import {ensureGlobalStyle} from "./lib/style.ts";

export async function mountWidget(hostElement: HTMLElement) {
    const mountedHost = getMountedHost(hostElement);
    const config = extractConfig(hostElement);

    activity('bootstrap', 'Widget mounted', config);

    ensureGlobalStyle('reactedge-megamenu-css', '/widget/megamenu.css');

    const root = createRoot(mountedHost);

    if (config.platform === 'magento') {
        root.render(<MegamenuWidget items={[]} loading />);
        const items = await loadMagentoMegaMenu();
        root.render(<MegamenuWidget items={items} />);
    }

    if (config.platform === 'wordpress') {
        root.render(<MegamenuWidget items={config.data.items} />);
    }
}
