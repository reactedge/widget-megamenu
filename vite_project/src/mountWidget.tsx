import { createRoot } from "react-dom/client";
import {loadMagentoMegaMenu} from "./adapters/magento/loadMagentoMenu.ts";
import {MegamenuWidget} from "./MegamenuWidget.tsx";
import {extractConfig} from "./services/configLoader.ts";
import {activity} from "./activity";
import {getMountedHost} from "./lib/hostReader.ts";
import {ensureGlobalStyle} from "./lib/style.ts";
import {Loading} from "./components/Loading.tsx";
import {ConfigStateProvider} from "./state/Config/ConfigStateProvider.tsx";

export async function mountWidget(hostElement: HTMLElement) {
    const mountedHost = getMountedHost(hostElement);
    const config = extractConfig(hostElement);

    activity('bootstrap', 'Widget mounted', config);

    ensureGlobalStyle('reactedge-megamenu-css', '/widget/megamenu.css');

    const root = createRoot(mountedHost);

    let items

    if (config.runtime.platform === 'magento') {
        root.render(<Loading />);
        items = await loadMagentoMegaMenu();
        if (items===undefined) {
            return
        }
    }

    if (config.runtime.platform === 'wordpress') {
        items = config.data.items;
    }

    root.render(
        <ConfigStateProvider settings={config.settings}>
            <MegamenuWidget items={items} />
        </ConfigStateProvider>
    );
}
