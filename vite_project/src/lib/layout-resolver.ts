import type {CategoryNode, MegaMenuConfig, MenuType} from "../components/Types.ts";

export function resolveDropdownLayout(
    categoryUrl: string | undefined,
    config: MegaMenuConfig
): "list" | "tiles" {
    if (!categoryUrl) return "list";

    return config.dropdownLayouts?.[categoryUrl] ?? "list";
}

export function getMenuType(
    level1: CategoryNode,
    layout: "list" | "tiles"
): MenuType {
    const hasChildren = !!level1.children?.length;
    if (!hasChildren) return "none";

    const hasGrandChildren = level1.children!.some(
        child => child.children && child.children.length > 0
    );

    if (!hasGrandChildren) {
        return layout === "tiles" ? "simple-tiles" : "simple-list";
    }

    return "complex";
}

