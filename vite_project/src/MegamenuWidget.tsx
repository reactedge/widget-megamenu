import {Loading} from "./components/Loading.tsx";
import {DesktopMegamenu} from "./components/DesktopMegamenu.tsx";
import type {MegaMenuProps} from "./domain/megamenu.types.ts";

export const WIDGET_ID = 'Megamenu';

export function MegamenuWidget({ items, loading = false }: MegaMenuProps) {
    if (loading || items && !items.length) return <Loading />

    return <DesktopMegamenu items={items} />;
}
