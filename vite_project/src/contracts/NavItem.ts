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
