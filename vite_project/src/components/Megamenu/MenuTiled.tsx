import type {NavItem} from "../../contracts/NavItem.ts";
import {MenuItem} from "../MenuItem.tsx";

interface MenuProps {
    children?: NavItem[];
}

export function MenuTiled({ children }: MenuProps) {
    if (!children?.length) return null;

    return (
        <div className="mw-megamenu-col">
            <ul className="mw-megamenu-col__list">
                {children.map(level2 => (
                    <li
                        key={level2.id}
                        className="mw-megamenu-col__item"
                    >
                        {/*<MenuTile key={level2.id} item={level2}/>*/}
                        <MenuItem item={level2}/>
                    </li>
                ))}
            </ul>
        </div>
    );
}
