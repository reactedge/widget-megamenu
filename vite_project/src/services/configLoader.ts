import type {MegaMenuConfig} from "../components/Types.ts";

export function extractConfig(hostElement: HTMLElement): MegaMenuConfig {
    const configScript = hostElement.querySelector<HTMLScriptElement>(
        'script[type="application/json"][data-config]'
    );

    if (!configScript) {
        throw new Error("USP widget requires a <script data-config> block.");
    }

    try {
        const parsed = JSON.parse(configScript.textContent || "{}");

        return {
            data: parsed.data ?? { items: [] },
            platform: parsed.runtime.platform,
            dataLocale: parsed.runtime.locale,
            fontColor: parsed.settings.theme.fontColor,
            primaryColor: parsed.settings.theme.primaryColor,
            secondaryColour: parsed.settings.theme.secondaryColour,
            urlSuffix: parsed.runtime.urlSuffix,
            dropdownLayouts: parsed.runtime.dropdownLayouts
        };

    } catch (err) {
        throw new Error("Invalid JSON inside <usp-widget> data-config block.");
    }
}