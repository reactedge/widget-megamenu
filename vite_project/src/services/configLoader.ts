import type {ResolvedMegamenuConfig} from "../domain/megamenu.types.ts";
import {activity} from "../activity";
import {WIDGET_ID} from "../mountWidget.tsx";

export function readWidgetConfig(
    rawConfig?: ResolvedMegamenuConfig
): ResolvedMegamenuConfig | undefined {
    let contract = rawConfig

    if (contract === null) {
        contract = extractConfig()
    }

    activity('bootstrap', 'Config resolved', contract);

    return Object.freeze(contract);
}

export function extractConfig() {
    const configScript = document.querySelector<HTMLScriptElement>(
        `script[type="application/json"][${WIDGET_ID}-data-config]`
    );

    if (!configScript?.textContent) {
        throw new Error(`[${WIDGET_ID}] requires a <script type="application/json" ${WIDGET_ID}-data-config block.`);
    }

    let parsed: unknown;
    try {
        parsed = JSON.parse(configScript.textContent);
    } catch {
        throw new Error(`[${WIDGET_ID}] invalid JSON inside <script data-config>.`);
    }

    if (!isMegaMenuWidgetConfig(parsed)) {
        throw new Error(`[${WIDGET_ID}] <script data-config> does not match MegaMenuWidgetConfig.`);
    }

    return Object.freeze(parsed);
}

function isMegaMenuWidgetConfig(value: unknown): value is ResolvedMegamenuConfig {
    if (!isObject(value)) return false;

    const data = (value as any).data;
    if (!isObject(data)) return false;

    const items = (data as any).items;
    if (!Array.isArray(items)) return false;

    if (!items.every(isMegaMenuItem)) return false;

    // settings is optional, but if present validate the parts you actually use
    const settings = (value as any).settings;
    if (settings !== undefined && !isObject(settings)) return false;

    return true;
}

function isMegaMenuItem(value: unknown): boolean {
    if (!isObject(value)) return false;

    const v = value as any;
    if (typeof v.id !== 'string') return false;
    if (typeof v.label !== 'string') return false;
    if (typeof v.url !== 'string') return false;

    if (!Array.isArray(v.children)) return false;
    if (!v.children.every(isMegaMenuItem)) return false;

    if (v.meta !== undefined) {
        if (!isObject(v.meta)) return false;
        if (v.meta.type !== undefined && typeof v.meta.type !== 'string') return false; // or restrict to 'cta'
    }

    return true;
}

function isObject(x: unknown): x is Record<string, unknown> {
    return typeof x === 'object' && x !== null;
}