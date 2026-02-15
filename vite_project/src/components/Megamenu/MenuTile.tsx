import {useState} from "react";
import {buildCategoryUrl} from "../../lib/url.ts";
import {styles} from "./style.ts";
import type {NavItem} from "../../domain/megamenu.types.ts";
import {useConfigState} from "../../state/Config/useConfigState.ts";

type MenuTileProps = {
    item: NavItem;
};

export function MenuTile({ item }: MenuTileProps) {
    const [hovered, setHovered] = useState(false);
    const {settings} = useConfigState();

    return (
        <a
            href={buildCategoryUrl(item.url, settings)}
            style={{
                ...styles.tile,
                ...(hovered ? styles.tileHover : {})
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {item.image && (
                <img
                    src={item.image}
                    alt={item.label}
                    style={styles.tileImage}
                />
            )}

            <span
                style={{
                    ...styles.tileLabel,
                    ...(hovered ? styles.tileLabelHover : {})
                }}
            >
                {item.label}
            </span>
        </a>
    );
}
