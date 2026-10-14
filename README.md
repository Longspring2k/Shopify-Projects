# GRID-FORM

[← Project directory](https://github.com/Longspring2k/Shopify-Projects/tree/main)

> Source inspection based on commit `0d4244651c946220122e40eabbe2124bef0367f0`.

## Overview

An editorial, grid-led storefront that turns collection browsing into a structured visual catalogue.

This branch is a Shopify Online Store 2.0 theme. Shopify JSON templates select Liquid sections; those sections render store data and include reusable snippets; CSS and JavaScript in `assets/` provide the visual and interaction layer. The inspected branch has no package-manager build step.

## What is implemented

- A custom homepage section is wired for merchant-configurable content: [`GRID-FORM/sections/studio-home.liquid`](GRID-FORM/sections/studio-home.liquid).
- Collection browsing uses [`GRID-FORM/sections/studio-collection.liquid`](GRID-FORM/sections/studio-collection.liquid) with reusable product-card rendering.
- Product presentation is implemented in [`GRID-FORM/sections/studio-product.liquid`](GRID-FORM/sections/studio-product.liquid) and receives Shopify product data through Liquid.
- A dedicated cart surface is present in [`GRID-FORM/sections/studio-cart.liquid`](GRID-FORM/sections/studio-cart.liquid); totals and checkout URLs still come from Shopify.
- JSON templates cover the principal storefront routes, including home, product, collection, cart and search.
- Standard theme files for predictive search, facets, customer pages and localization remain in the tree. Their presence does not establish that every feature is wired into the custom layout; runtime integration must be checked separately.

## Request-to-render flow

_Illustrative source architecture, not a runtime capture._

```mermaid
flowchart LR
    A[Shopify route and store data] --> B[JSON template]
    B --> C[Custom Liquid section]
    C --> D[Reusable snippets]
    C --> E[Branch CSS and JavaScript]
    D --> F[Rendered storefront]
    E --> F
    F --> G[Shopify cart, search and account services]
```

## Code map

- [`GRID-FORM/sections/studio-home.liquid`](GRID-FORM/sections/studio-home.liquid)
- [`GRID-FORM/sections/studio-collection.liquid`](GRID-FORM/sections/studio-collection.liquid)
- [`GRID-FORM/sections/studio-product.liquid`](GRID-FORM/sections/studio-product.liquid)
- [`GRID-FORM/sections/studio-cart.liquid`](GRID-FORM/sections/studio-cart.liquid)
- [`GRID-FORM/snippets/studio-card.liquid`](GRID-FORM/snippets/studio-card.liquid)
- [`GRID-FORM/assets/studio.css`](GRID-FORM/assets/studio.css)
- [`GRID-FORM/assets/studio-motion.js`](GRID-FORM/assets/studio-motion.js)
- [`GRID-FORM/templates/index.json`](GRID-FORM/templates/index.json) — homepage routing.
- [`GRID-FORM/templates/product.json`](GRID-FORM/templates/product.json) — product route composition.
- [`GRID-FORM/templates/collection.json`](GRID-FORM/templates/collection.json) — collection route composition.
- [`GRID-FORM/templates/cart.json`](GRID-FORM/templates/cart.json) — cart route composition.
- [`GRID-FORM/layout/theme.liquid`](GRID-FORM/layout/theme.liquid) — outer Shopify document shell.
- [`GRID-FORM/config/settings_schema.json`](GRID-FORM/config/settings_schema.json) — theme-editor setting definitions.

## Route coverage

| Storefront route | Composition |
|---|---|
| Home | `templates/index.json` selects the custom landing section. |
| Collection | `templates/collection.json` renders collection data and product cards. |
| Product | `templates/product.json` renders media, variants, price and purchase controls. |
| Cart | `templates/cart.json` presents Shopify cart lines, totals and checkout handoff. |
| Search | `templates/search.json` renders Shopify search results. |
| Accounts and content | Standard customer, page, blog and article templates remain available. |

## Architecture notes

- **Rendering:** server-rendered Liquid, composed through Online Store 2.0 JSON templates.
- **Data:** Shopify `product`, `collection`, `cart`, `search`, localization and customer objects.
- **Presentation:** branch-specific sections and snippets layered over standard reusable theme components.
- **Interaction:** plain browser JavaScript from theme assets; no Node runtime is required in production.
- **Configuration:** section schemas and theme settings expose editable content in the Shopify theme editor.

## How this branch differs

Strong geometric composition, custom collection/product/cart shells, and shared reveal/interaction helpers.

The branch should be evaluated as its own theme snapshot. Similar standard Shopify files appear across branches, but the custom sections, route coverage, stylesheet and visual hierarchy are branch-specific.

## Using the theme

The repository does not provide package scripts or a local build command. To preview it, use a Shopify development store and the Shopify CLI or upload the directory as a theme through Shopify's supported theme workflow. Select `GRID-FORM` as the theme root.

Typical Shopify CLI commands are intentionally not asserted here because no CLI version or store configuration is pinned in this branch. Follow the commands for the Shopify CLI version installed in your environment.

## Verification status

This README was produced by static inspection of commit `0d4244651c946220122e40eabbe2124bef0367f0`. The files were **not runtime-tested**, uploaded, installed or connected to a store during documentation work.

## Platform and verification limits

- Screenshots, live catalogue content and merchant settings are not included as verification evidence.
- Product availability, prices, variants, media, collections, search results and cart totals require real Shopify store data.
- Checkout, payment, tax, shipping, customer authentication and order processing are Shopify-hosted platform capabilities, not implemented by this repository.
- Any placeholder copy or media visible in section defaults is demonstration content, not a claim about a live merchant.

## Credits and licensing

The branch contains standard Shopify theme building blocks alongside its custom presentation layer. No standalone license file was found in the inspected branch; reuse should therefore be reviewed with the repository owner before redistribution.
