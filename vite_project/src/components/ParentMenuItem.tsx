import {buildCategoryUrl, isInBreadCrumb} from "../lib/url.ts";
import type {NavItem} from "../domain/megamenu.types.ts";
import {useConfigState} from "../state/Config/useConfigState.ts";

interface ParentMenuItemProps {
    isActive: boolean;
    item: NavItem;
    hasSubmenu: boolean
}

export function ParentMenuItem({
    item,
    isActive,
    hasSubmenu
}: ParentMenuItemProps) {
    const {settings} = useConfigState();
    const isBreadcrumb = isInBreadCrumb(item);

    const label = (
        <span
            className={[
                "mw-parent-label",
                isActive && "is-active",
                isBreadcrumb && "is-breadcrumb",
                hasSubmenu && "has-submenu"
            ]
                .filter(Boolean)
                .join(" ")
            }
        >
            {item.label}
            {hasSubmenu && (
                <span className="mw-parent-arrow" aria-hidden="true">
                    ▼
                </span>
            )}
        </span>
    );

    if (!hasSubmenu && item.url) {
        return (
            <a
                href={buildCategoryUrl(item.url, settings)}
                className="mw-parent-link"
            >
                {label}
            </a>
        );
    }

    return <div className="mw-parent-item">{label}</div>;
}