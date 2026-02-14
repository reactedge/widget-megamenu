import type {NavItem} from "../contracts/NavItem.ts";

export type CategoryNode = {
    id: string;
    label: string;
    url?: string;
    image?: string;
    layout?: "list" | "tiles";
    children?: CategoryNode[];
};


export type Translations = {
    [key: string]: string;
};

export type MegaMenuConfig = {
    data: { items: NavItem[]}
    platform: string;
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
    items: NavItem[];
    loading?: boolean;
};