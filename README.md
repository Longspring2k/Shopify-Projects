# NORTHLINE

[← Project directory](https://github.com/Longspring2k/Shopify-Projects/tree/main)

> Source inspection based on commit `05d60a070fde1bd45f6974f91d6e749ee1479790`.

## Overview

The broadest content-and-commerce theme in the repository, extending the storefront with dedicated story, contact, page-banner and password experiences.

This branch is a Shopify Online Store 2.0 theme. Shopify JSON templates select Liquid sections; those sections render store data and include reusable snippets; CSS and JavaScript in `assets/` provide the visual and interaction layer. The inspected branch has no package-manager build step.

## What is implemented

- A custom homepage section is wired for merchant-configurable content: [`NORTHLINE/sections/strata-home.liquid`](NORTHLINE/sections/strata-home.liquid).
- Editorial/content-page coverage is extended by [`NORTHLINE/sections/strata-about.liquid`](NORTHLINE/sections/strata-about.liquid).
- Editorial/content-page coverage is extended by [`NORTHLINE/sections/strata-contact.liquid`](NORTHLINE/sections/strata-contact.liquid).
- Editorial/content-page coverage is extended by [`NORTHLINE/sections/strata-page-banner.liquid`](NORTHLINE/sections/strata-page-banner.liquid).
- Product presentation is implemented in [`NORTHLINE/sections/strata-product.liquid`](NORTHLINE/sections/strata-product.liquid) and receives Shopify product data through Liquid.
- A dedicated cart surface is present in [`NORTHLINE/sections/strata-cart.liquid`](NORTHLINE/sections/strata-cart.liquid); totals and checkout URLs still come from Shopify.
- Editorial/content-page coverage is extended by [`NORTHLINE/templates/page.about.json`](NORTHLINE/templates/page.about.json).
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

- [`NORTHLINE/sections/strata-home.liquid`](NORTHLINE/sections/strata-home.liquid)
- [`NORTHLINE/sections/strata-about.liquid`](NORTHLINE/sections/strata-about.liquid)
- [`NORTHLINE/sections/strata-contact.liquid`](NORTHLINE/sections/strata-contact.liquid)
- [`NORTHLINE/sections/strata-page-banner.liquid`](NORTHLINE/sections/strata-page-banner.liquid)
- [`NORTHLINE/sections/strata-product.liquid`](NORTHLINE/sections/strata-product.liquid)
- [`NORTHLINE/sections/strata-cart.liquid`](NORTHLINE/sections/strata-cart.liquid)
- [`NORTHLINE/templates/page.about.json`](NORTHLINE/templates/page.about.json)
- [`NORTHLINE/snippets/strata-card.liquid`](NORTHLINE/snippets/strata-card.liquid)
- [`NORTHLINE/assets/strata.css`](NORTHLINE/assets/strata.css)
- [`NORTHLINE/assets/strata.js`](NORTHLINE/assets/strata.js)
- [`NORTHLINE/templates/index.json`](NORTHLINE/templates/index.json) — homepage routing.
- [`NORTHLINE/templates/product.json`](NORTHLINE/templates/product.json) — product route composition.
- [`NORTHLINE/templates/collection.json`](NORTHLINE/templates/collection.json) — collection route composition.
- [`NORTHLINE/templates/cart.json`](NORTHLINE/templates/cart.json) — cart route composition.
- [`NORTHLINE/layout/theme.liquid`](NORTHLINE/layout/theme.liquid) — outer Shopify document shell.
- [`NORTHLINE/config/settings_schema.json`](NORTHLINE/config/settings_schema.json) — theme-editor setting definitions.

## Route coverage

| Storefront route | Composition |
|---|---|
| Home | `templates/index.json` selects the custom landing section. |
| Collection | `templates/collection.json` renders collection data and product cards. |
| Product | `templates/product.json` renders media, variants, price and purchase controls. |
| Cart | `templates/cart.json` presents Shopify cart lines, totals and checkout handoff. |
| Search | `templates/search.json` renders Shopify search results. |
| Accounts and content | Standard customer routes plus custom about, contact and page-banner sections are available. |

## Architecture notes

- **Rendering:** server-rendered Liquid, composed through Online Store 2.0 JSON templates.
- **Data:** Shopify `product`, `collection`, `cart`, `search`, localization and customer objects.
- **Presentation:** branch-specific sections and snippets layered over standard reusable theme components.
- **Interaction:** plain browser JavaScript from theme assets; no Node runtime is required in production.
- **Configuration:** section schemas and theme settings expose editable content in the Shopify theme editor.

## How this branch differs

A larger custom STRATA layer, an explicit about-page template, richer page coverage, and separate CSS/JS assets.

The branch should be evaluated as its own theme snapshot. Similar standard Shopify files appear across branches, but the custom sections, route coverage, stylesheet and visual hierarchy are branch-specific.

## Using the theme

The repository does not provide package scripts or a local build command. To preview it, use a Shopify development store and the Shopify CLI or upload the directory as a theme through Shopify's supported theme workflow. Select `NORTHLINE` as the theme root.

Typical Shopify CLI commands are intentionally not asserted here because no CLI version or store configuration is pinned in this branch. Follow the commands for the Shopify CLI version installed in your environment.

## Verification status

This README was produced by static inspection of commit `05d60a070fde1bd45f6974f91d6e749ee1479790`. The files were **not runtime-tested**, uploaded, installed or connected to a store during documentation work.

## Platform and verification limits

- Screenshots, live catalogue content and merchant settings are not included as verification evidence.
- Product availability, prices, variants, media, collections, search results and cart totals require real Shopify store data.
- Checkout, payment, tax, shipping, customer authentication and order processing are Shopify-hosted platform capabilities, not implemented by this repository.
- Any placeholder copy or media visible in section defaults is demonstration content, not a claim about a live merchant.

## Credits and licensing

The branch contains standard Shopify theme building blocks alongside its custom presentation layer. No standalone license file was found in the inspected branch; reuse should therefore be reviewed with the repository owner before redistribution.
