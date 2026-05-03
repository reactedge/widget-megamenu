import type {NavItem} from "../domain/megamenu.types.ts";


function normalisePath(input: string): string {
    try {
        // Absolute URL → parse it
        const url = new URL(input, window.location.origin);

        // If same origin, return path only
        if (url.origin === window.location.origin) {
            const path =
                (url.pathname.replace(/\/+$/, "") || "/") +
                url.search +
                url.hash;

            return path;
        }

        // External URL → keep as-is
        return input;
    } catch {
        // Relative path fallback
        return input.replace(/\/+$/, "") || "/";
    }
}

function isActiveItem(itemUrl: string | null): boolean {
    if (!itemUrl) return false;

    if (itemUrl === "#" || itemUrl.startsWith("#")) {
        return false;
    }

    const currentPath = window.location.pathname;

    return normalisePath(itemUrl) === normalisePath(currentPath);
}

function hasActiveChild(item: NavItem): boolean {
    return item.children.some(
        child =>
            isActiveItem(child.url) ||
            hasActiveChild(child)
    );
}

export function isInBreadCrumb(item: NavItem): boolean {
    return isActiveItem(item.url) ||
        hasActiveChild(item);
}
