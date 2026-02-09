import {ParentMenuItem} from "./ParentMenuItem.tsx";
import {ItemLink} from "./Megamenu/ItemLink.tsx";
import type {NavItem} from "../contracts/NavItem.ts";
import {buildCategoryUrl, isInBreadCrumb} from "../lib/url.ts";
import {useWidgetConfig} from "../hooks/useWidgetConfig.ts";
import {CtaItemLink} from "./Megamenu/CtaItemLink.tsx";

type MenuItemProps = {
    item: NavItem;
    isActive?: boolean;
    isParent?: boolean;
    hasSubmenu?: boolean;
};

export function MenuItem(props: MenuItemProps) {
    const { item, isActive, isParent, hasSubmenu } = props;
    const config = useWidgetConfig();
    const url = buildCategoryUrl(item.url, config);

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
