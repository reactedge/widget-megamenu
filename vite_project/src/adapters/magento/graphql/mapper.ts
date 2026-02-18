import type {NavItem} from "../../../domain/megamenu.types.ts";

export function normaliseMagentoCategories(categories: any[]): NavItem[] {
    return categories.map(cat => ({
            id: String(cat.uid),
            label: cat.name as string,
            image: cat.image as string,
            url: cat.url_path ? `/${cat.url_path}` : '',
            children: cat.children
                ? normaliseMagentoCategories(cat.children)
                : []
        })
    );
}
