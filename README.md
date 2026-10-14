# MORUVA

[← Project directory](https://github.com/Longspring2k/Shopify-Projects/tree/main)

> Source inspection based on commit `8071371cb21f370223212015c0bd5c2665ce942d`.

## Overview

A lifestyle-commerce theme with branch-specific home, collection, product, header and footer presentation, while cart, search and other secondary routes retain standard theme sections.

This branch is a Shopify Online Store 2.0 theme. Shopify JSON templates select Liquid sections; those sections render store data and include reusable snippets; CSS and JavaScript in `assets/` provide the visual and interaction layer. The inspected branch has no package-manager build step.

## What is implemented

- A custom homepage section is wired for merchant-configurable content: [`MORUVA/sections/moruva-home.liquid`](MORUVA/sections/moruva-home.liquid).
- Collection browsing uses [`MORUVA/sections/moruva-collection.liquid`](MORUVA/sections/moruva-collection.liquid) with reusable product-card rendering.
- Product presentation is implemented in [`MORUVA/sections/moruva-product.liquid`](MORUVA/sections/moruva-product.liquid) and receives Shopify product data through Liquid.
- JSON templates provide storefront coverage for home, product, collection, cart and search; home, product and collection select branch-specific sections, while cart and search retain the standard theme sections.
- Standard theme files for predictive search, facets, customer pages and localization remain in the tree. Their presence does not establish that every feature is wired into the custom layout; runtime integration must be checked separately.

## Request-to-render flow

_Illustrative source architecture, not a runtime capture._

```mermaid
flowchart LR
    A[Shopify route and store data] --> B[JSON template]
    B --> C[Custom or retained standard Liquid section]
    C --> D[Reusable snippets]
    C --> E[Branch CSS and JavaScript]
    D --> F[Rendered storefront]
    E --> F
    F --> G[Shopify cart, search and account services]
```

## Code map

- [`MORUVA/sections/moruva-home.liquid`](MORUVA/sections/moruva-home.liquid)
- [`MORUVA/sections/moruva-header.liquid`](MORUVA/sections/moruva-header.liquid)
- [`MORUVA/sections/moruva-collection.liquid`](MORUVA/sections/moruva-collection.liquid)
- [`MORUVA/sections/moruva-product.liquid`](MORUVA/sections/moruva-product.liquid)
- [`MORUVA/sections/moruva-footer.liquid`](MORUVA/sections/moruva-footer.liquid)
- [`MORUVA/snippets/moruva-card.liquid`](MORUVA/snippets/moruva-card.liquid)
- [`MORUVA/assets/moruva.css`](MORUVA/assets/moruva.css)
- [`MORUVA/templates/index.json`](MORUVA/templates/index.json) — homepage routing.
- [`MORUVA/templates/product.json`](MORUVA/templates/product.json) — product route composition.
- [`MORUVA/templates/collection.json`](MORUVA/templates/collection.json) — collection route composition.
- [`MORUVA/templates/cart.json`](MORUVA/templates/cart.json) — cart route composition.
- [`MORUVA/layout/theme.liquid`](MORUVA/layout/theme.liquid) — outer Shopify document shell.
- [`MORUVA/config/settings_schema.json`](MORUVA/config/settings_schema.json) — theme-editor setting definitions.

## Route coverage

| Storefront route | Composition |
|---|---|
| Home | `templates/index.json` selects the custom landing section. |
| Collection | `templates/collection.json` renders collection data and product cards. |
| Product | `templates/product.json` renders media, variants, price and purchase controls. |
| Cart | `templates/cart.json` selects retained `main-cart-items` and `main-cart-footer` sections. |
| Search | `templates/search.json` selects the retained `main-search` section. |
| Accounts and content | Standard customer, page, blog and article templates remain available. |

## Architecture notes

- **Rendering:** server-rendered Liquid, composed through Online Store 2.0 JSON templates.
- **Data:** Shopify `product`, `collection`, `cart`, `search`, localization and customer objects.
- **Presentation:** branch-specific sections and snippets layered over standard reusable theme components.
- **Interaction:** plain browser JavaScript from theme assets; no Node runtime is required in production.
- **Configuration:** section schemas and theme settings expose editable content in the Shopify theme editor.

## How this branch differs

Dedicated home, header, collection, product and footer sections, with its own card and stylesheet. Cart, search and secondary routes retain standard theme sections rather than the custom shopping-route shells used in the other project branches.

The branch should be evaluated as its own theme snapshot. Similar standard Shopify files appear across branches, but the custom sections, route coverage, stylesheet and visual hierarchy are branch-specific.

## Using the theme

The repository does not provide package scripts or a local build command. To preview it, use a Shopify development store and the Shopify CLI or upload the directory as a theme through Shopify's supported theme workflow. Select `MORUVA` as the theme root.

Typical Shopify CLI commands are intentionally not asserted here because no CLI version or store configuration is pinned in this branch. Follow the commands for the Shopify CLI version installed in your environment.

## Verification status

This README was produced by static inspection of commit `8071371cb21f370223212015c0bd5c2665ce942d`. The files were **not runtime-tested**, uploaded, installed or connected to a store during documentation work.

## Platform and verification limits

- Screenshots, live catalogue content and merchant settings are not included as verification evidence.
- Product availability, prices, variants, media, collections, search results and cart totals require real Shopify store data.
- Checkout, payment, tax, shipping, customer authentication and order processing are Shopify-hosted platform capabilities, not implemented by this repository.
- Any placeholder copy or media visible in section defaults is demonstration content, not a claim about a live merchant.

## Credits and licensing

The branch contains standard Shopify theme building blocks alongside its custom presentation layer. No standalone license file was found in the inspected branch; reuse should therefore be reviewed with the repository owner before redistribution.
