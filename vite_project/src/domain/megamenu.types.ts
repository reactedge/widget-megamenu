
export interface ResolvedMegamenuConfig {
    readonly runtime: RuntimeConfig,
    readonly data: MegaMenuDataConfig;
    readonly settings?: {theme: MegaMenuSettingsConfig};
}

export interface RuntimeConfig {
    "platform": "wordpress" | "magento"
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

export type MegamenuRuntimeConfig = {
    platform: 'magento' | 'wordpress'
}

export type MenuType =
    | "none"
    | "simple-list"
    | "simple-tiles"
    | "complex";


export type MegaMenuResponse = {
    categories: {
        items: MegaMenuItem[]
    };
};

export type MegaMenuItem = {
    uid: string;
    name: string;
    url_path: string;
    image: string
    children: MegaMenuItem[]
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

export interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
    side?: "left" | "right";
    children: React.ReactNode;
}

