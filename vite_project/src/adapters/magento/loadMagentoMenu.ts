import type {NavItem} from "../../contracts/NavItem.ts";
import type {MegaMenuResponse} from "../../components/Types.ts";
import {graphqlFetch} from "./graphql/fetcher.ts";
import {normaliseMagentoCategories} from "./graphql/mapper.ts";

export const MEGAMENU_QUERY = `
    query MegaMenuCategories {
      categoryList(filters: { parent_id: { eq: "2" } }) {
        uid
        name
        url_path
        image
        children {
          uid
          name
          url_path
          image
          children {
            uid
            name
            url_path
            image
          }
        }
      }
    }
`;

export async function loadMagentoMegaMenu(): Promise<NavItem[]> {
    const res = await graphqlFetch<MegaMenuResponse>(MEGAMENU_QUERY);
    return normaliseMagentoCategories(res.categoryList)
}
