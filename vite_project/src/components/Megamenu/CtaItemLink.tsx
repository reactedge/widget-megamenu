import {useWidgetConfig} from "../../hooks/useWidgetConfig.ts";
import {buildCategoryUrl} from "../../lib/url.ts";
import {renderIcon} from "./Icon.tsx";

interface CtaLinkProps {
    url?: string;
    label: string;
    icon?: "arrow" | "external";
}

export function CtaItemLink({ url, label, icon }: CtaLinkProps) {
    const config = useWidgetConfig();

    return (
        <a
            href={buildCategoryUrl(url, config)}
            className="mw-cta-link"
        >
            <span className="mw-cta-link__label">{label}</span>

            {icon && (
                <span
                    className="mw-cta-link__icon"
                    aria-hidden="true"
                >
                    {renderIcon(icon)}
                </span>
            )}
        </a>
    );
}