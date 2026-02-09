import {useState} from "react";
import type {CategoryNode} from "../Types.ts";
import {useWidgetConfig} from "../../hooks/useWidgetConfig.ts";
import {buildCategoryUrl} from "../../lib/url.ts";
import {styles} from "./style.ts";

type MenuTileProps = {
    item: CategoryNode;
};

export function MenuTile({ item }: MenuTileProps) {
    const [hovered, setHovered] = useState(false);
    const config = useWidgetConfig();

    return (
        <a
            href={buildCategoryUrl(item.url, config)}
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
