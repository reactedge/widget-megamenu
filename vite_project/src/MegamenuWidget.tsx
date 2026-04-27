import {MegamenuContent} from "./components/MegamenuContent.tsx";
import {ConfigStateProvider} from "./state/Config/ConfigStateProvider.tsx";
import {useMediaQuery} from "./hooks/ui/useMediaQuery.tsx";
import {MobileMegamenu} from "./components/MobileMegamenu.tsx";
import type {ResolvedMegamenuConfig} from "./domain/megamenu.types.ts";
import {readWidgetConfig} from "./services/configLoader.ts";

type Props = {
    rawConfig?: ResolvedMegamenuConfig
}

export function MegamenuWidget({rawConfig}: Props) {
    const config = readWidgetConfig(rawConfig);
    const isMobile = useMediaQuery('(max-width: 768px)');

    if (!config) return null;

    return <ConfigStateProvider settings={config?.settings?.theme}>
        {!isMobile && <MegamenuContent items={config?.data.items} />}
        {isMobile && <MobileMegamenu items={config?.data.items} />}
    </ConfigStateProvider>;
}
