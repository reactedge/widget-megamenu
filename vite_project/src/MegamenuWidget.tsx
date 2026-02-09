//import {useWidgetData} from "./hooks/useWidgetData.ts";
import {Loading} from "./components/Loading.tsx";
import type {MegaMenuProps} from "./components/Types.ts";
import {DesktopMegamenu} from "./components/DesktopMegamenu.tsx";

export function MegamenuWidget({ items, loading = false }: MegaMenuProps) {
    if (loading || !items.length) return <Loading />

    return (
        <DesktopMegamenu items={items} />
    );
}
