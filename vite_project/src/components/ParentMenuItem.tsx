import type {NavItem} from "../contracts/NavItem.ts";
import {buildCategoryUrl, isInBreadCrumb} from "../lib/url.ts";
import {useWidgetConfig} from "../hooks/useWidgetConfig.ts";

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
    const config = useWidgetConfig();
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
                href={buildCategoryUrl(item.url, config)}
                className="mw-parent-link"
            >
                {label}
            </a>
        );
    }

    return <div className="mw-parent-item">{label}</div>;
}