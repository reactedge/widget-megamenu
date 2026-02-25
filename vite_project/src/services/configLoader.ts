import type {ResolvedMegamenuConfig} from "../domain/megamenu.types.ts";
import {activity} from "../activity";
import {loadContract} from "../widget-runtime/lib/contractLoader.ts";

export async function readWidgetConfig(
    hostElement: HTMLElement
): Promise<ResolvedMegamenuConfig> {

    const contract = await loadContract(hostElement);

    activity('bootstrap', 'Config resolved', contract);

    return Object.freeze(contract);
}


// function isMegaMenuWidgetConfig(value: unknown): value is ResolvedMegamenuConfig {
//     if (!isObject(value)) return false;
//
//     // const data = (value as any).data;
//     // if (!isObject(data)) return false;
//     //
//     // const items = (data as any).items;
//     // if (!Array.isArray(items)) return false;
//
//     //if (!items.every(isMegaMenuItem)) return false;
//
//     // settings is optional, but if present validate the parts you actually use
//     const settings = (value as any).settings;
//     if (settings !== undefined && !isObject(settings)) return false;
//
//     return true;
// }

// function isMegaMenuItem(value: unknown): boolean {
//     if (!isObject(value)) return false;
//
//     const v = value as any;
//     if (typeof v.id !== 'string') return false;
//     if (typeof v.label !== 'string') return false;
//     if (typeof v.url !== 'string') return false;
//
//     if (!Array.isArray(v.children)) return false;
//     if (!v.children.every(isMegaMenuItem)) return false;
//
//     if (v.meta !== undefined) {
//         if (!isObject(v.meta)) return false;
//         if (v.meta.type !== undefined && typeof v.meta.type !== 'string') return false; // or restrict to 'cta'
//     }
//
//     return true;
// }

// function isObject(x: unknown): x is Record<string, unknown> {
//     return typeof x === 'object' && x !== null;
// }
