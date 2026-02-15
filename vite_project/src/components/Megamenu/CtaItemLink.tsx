import {buildCategoryUrl} from "../../lib/url.ts";
import {renderIcon} from "./Icon.tsx";
import {useConfigState} from "../../state/Config/useConfigState.ts";

interface CtaLinkProps {
    url?: string;
    label: string;
    icon?: "arrow" | "external";
}

export function CtaItemLink({ url, label, icon }: CtaLinkProps) {
    const {settings} = useConfigState();

    return (
        <a
            href={buildCategoryUrl(url, settings)}
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