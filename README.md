# Shopify Projects

Five independent Shopify Online Store 2.0 theme studies live on separate branches. Each branch is a complete Liquid theme snapshot rather than a package-managed front-end application.

## Project directory

| Branch | Purpose | Architecture | What makes it distinct |
|---|---|---|---|
| [GRID-FORM](https://github.com/Longspring2k/Shopify-Projects/tree/GRID-FORM) | An editorial, grid-led storefront that turns collection browsing into a structured visual catalogue. | Liquid sections + JSON templates + theme assets | Strong geometric composition, custom collection/product/cart shells, and shared reveal/interaction helpers. |
| [MORUVA](https://github.com/Longspring2k/Shopify-Projects/tree/MORUVA) | A lifestyle-commerce theme with custom home, header, collection, product, footer, card and stylesheet components. | Liquid sections + JSON templates + theme assets | Custom primary catalogue presentation; cart, search and secondary routes retain standard theme sections. |
| [NEXO](https://github.com/Longspring2k/Shopify-Projects/tree/NEXO) | A high-contrast catalogue storefront organized around custom home, search, collection, product and cart experiences. | Liquid sections + JSON templates + theme assets | Adds a branded search surface to the shared studio architecture and uses branch-specific templates to route the complete shopping path. |
| [NORTHLINE](https://github.com/Longspring2k/Shopify-Projects/tree/NORTHLINE) | The broadest content-and-commerce theme in the repository, extending the storefront with dedicated story, contact, page-banner and password experiences. | Liquid sections + JSON templates + theme assets | A larger custom STRATA layer, an explicit about-page template, richer page coverage, and separate CSS/JS assets. |
| [VELORA](https://github.com/Longspring2k/Shopify-Projects/tree/VELORA) | A custom visual-commerce theme with a custom landing page and consistent branded shells for catalogue, product, cart, search and content pages. | Liquid sections + JSON templates + theme assets | Balances broad route coverage with a restrained shared motion layer and a branch-specific page section. |

## How to browse

1. Open a branch from the table.
2. Enter the top-level directory with the same name as the branch.
3. Start with `templates/index.json` to see which custom section renders the home page.
4. Read the branch-specific files under `sections/`, then follow their snippets and assets.
5. Use `layout/theme.liquid`, `config/settings_schema.json`, and the standard sections to understand Shopify integration.

## Scope and verification

Descriptions were derived from the files at the recorded branch commits. No theme was uploaded to a Shopify store, no dependencies were installed, and no runtime or checkout test was performed. Product, collection, cart, search, customer and localization behavior ultimately depends on Shopify data and platform services.

## Repository map

```text
main              project directory
GRID-FORM         grid-led editorial commerce theme
MORUVA            lifestyle commerce theme
NEXO              catalogue/search-focused commerce theme
NORTHLINE         content-rich commerce theme
VELORA            custom visual commerce theme
```

The branch names above are navigation labels only; the documentation intentionally avoids client identities and deployment URLs.
