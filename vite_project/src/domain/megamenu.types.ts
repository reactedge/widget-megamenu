
export interface MegaMenuWidgetConfig {
    readonly runtime: {
        "platform": "wordpress" | "magento"
    },
    readonly data: MegaMenuDataConfig;
    readonly settings?: MegaMenuSettingsConfig;
}

export interface MegaMenuDataConfig {
    readonly items: NavItem[];
}

export type MenuItemType = 'default' | 'cta';


export type Translations = {
    [key: string]: string;
};

export type MegaMenuSettingsConfig = {
    dataLocale?: string;
    fontColor?: string;
    primaryColor?: string;
    secondaryColour?: string;
    urlSuffix?: string;
    dropdownLayouts?: {
        [urlPath: string]: "list" | "tiles";
    };
};

export type MenuType =
    | "none"
    | "simple-list"
    | "simple-tiles"
    | "complex";


export type MegaMenuResponse = {
    categoryList: any[];
};

export type MegaMenuProps = {
    items: NavItem[] | undefined;
    loading?: boolean;
};

export type NavItem = {
    id: string
    label: string
    url: string
    image: string
    children: NavItem[]
    meta?: {
        type?: "link" | "cta" | "banner"
        icon?: "arrow" | "external";
    }
}
