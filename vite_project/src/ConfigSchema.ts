import { z } from 'zod';
import type {MegaMenuDataConfig, MegaMenuSettingsConfig, RuntimeConfig} from "./domain/megamenu.types.ts";

const RuntimeSchema = z.object({
    platform: z.enum([
        'magento',
        'wordpress'
    ])
}).strict();

const ThemeSchema = z.object({
    dataLocale: z.string(),
    fontColor: z.string(),
    primaryColor: z.string(),
    secondaryColor: z.string(),
    urlSuffix: z.string(),

    dropdownLayouts: z.record(
        z.string(),
        z.enum([
            'tiles',
            'list'
        ])
    ).optional()
}).strict();

interface MenuItem {
    id: string;
    label: string;
    url: string;
    image: string | null;
    children: MenuItem[];
}

const MenuItemSchema: z.ZodType<MenuItem> =
    z.lazy(() =>
        z.object({
            id: z.string(),
            label: z.string(),
            url: z.string(),
            image: z.string().nullable(),
            children: z.array(
                MenuItemSchema
            ),
            meta: z.object({
                type: z.enum([
                    'link',
                    'cta',
                    'banner'
                ]),
                icon: z.enum([
                    'arrow',
                    'external'
                ]),
            }).optional()
        }).strict()
    );

export const WidgetConfigSchema =
    z.object({
        runtime: RuntimeSchema,

        data: z.object({
            items: z.array(
                MenuItemSchema
            )
        }).strict(),

        settings: z.object({
            theme: ThemeSchema
        }).strict()
    }).strict();

export type WidgetConfig =
    z.infer<typeof WidgetConfigSchema>;

export function parseConfig(
    input: unknown
): WidgetConfig {
    return WidgetConfigSchema.parse(input);
}