import {MegamenuContent} from "./components/MegamenuContent.tsx";
import {useWidgetConfig} from "./hooks/useWidgetConfig.ts";
import {ConfigStateProvider} from "./state/Config/ConfigStateProvider.tsx";
import {ErrorState} from "./components/global/ErrorState.tsx";
import {Spinner} from "./components/global/Spinner.tsx";
import {useMediaQuery} from "./hooks/ui/useMediaQuery.tsx";
import {MobileMegamenu} from "./components/MobileMegamenu.tsx";

type Props = {
    host: HTMLElement
}

export function MegamenuWidget({host}: Props) {
    const {config, error, loading} = useWidgetConfig(host);
    const isMobile = useMediaQuery('(max-width: 768px)');

    if (!config) return null;
    if (error) return <ErrorState />
    if (loading) return <Spinner />

    return <ConfigStateProvider settings={config?.settings?.theme}>
        {!isMobile && <MegamenuContent items={config?.data.items} />}
        {isMobile && <MobileMegamenu items={config?.data.items} />}
    </ConfigStateProvider>;
}
