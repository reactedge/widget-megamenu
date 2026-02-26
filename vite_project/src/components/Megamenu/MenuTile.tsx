import {buildCategoryUrl} from "../../lib/url.ts";
import type {NavItem} from "../../domain/megamenu.types.ts";
import {useConfigState} from "../../state/Config/useConfigState.ts";

type MenuTileProps = {
    item: NavItem;
};

export function MenuTile({ item }: MenuTileProps) {
    const {settings} = useConfigState();

    return (
        <a
            href={buildCategoryUrl(item.url, settings)}
            className="mw-menu-tile"
        >
            {item.image && (
                <img
                    src={item.image}
                    alt={item.label}
                    className="mw-menu-tile__image"
                />
            )}

            <span className="mw-menu-tile__label">
                {item.label}
            </span>
        </a>
    );
}
