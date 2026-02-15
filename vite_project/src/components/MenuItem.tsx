import {ParentMenuItem} from "./ParentMenuItem.tsx";
import {ItemLink} from "./Megamenu/ItemLink.tsx";
import {buildCategoryUrl, isInBreadCrumb} from "../lib/url.ts";
import {CtaItemLink} from "./Megamenu/CtaItemLink.tsx";
import type {NavItem} from "../domain/megamenu.types.ts";
import {useConfigState} from "../state/Config/useConfigState.ts";

type MenuItemProps = {
    item: NavItem;
    isActive?: boolean;
    isParent?: boolean;
    hasSubmenu?: boolean;
};

export function MenuItem(props: MenuItemProps) {
    const { item, isActive, isParent, hasSubmenu } = props;
    const {settings} = useConfigState();
    const url = buildCategoryUrl(item.url, settings);

    if (!url) return null;

    // CTA (special intent)
    if (item.meta?.type === "cta") {
        return <CtaItemLink url={url} label={item.label} icon={item.meta?.icon} />;
    }

    // Parent with children
    if (isParent) {
        return <ParentMenuItem item={item} isActive={isActive || false} hasSubmenu={hasSubmenu || false} />;
    }

    // Leaf
    return <ItemLink url={url} label={item.label} isInBreadcrumb={isInBreadCrumb(item)} />;
}
