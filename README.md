# Coke Zero—Common Ground

A React archive inspired by a family disagreement: my dad prefers Coke Zero and I prefer Diet Coke. Explore 15 Coca-Cola Company sodas, search their ingredients, filter by brand/flavor/sweetener, sort by nutrition or verified release year, save a personal collection, and use arrow buttons to rearrange the archive. Select two drinks to highlight shared ingredients and compare nutrition at the label serving size or a calculated 12 fl oz serving; the optional contribution form adds a soda to the current session.

## Setup

Run `npm ci`, then `npm run dev`. Run `npm run build` to create `dist`, or `npm exec vite preview` to preview that build. React `useState` holds products, their order, filters, comparison choices, and the collection. Data lives in `src/products.js`; reusable product art and contribution components are in `src/Library.jsx`. Session changes reset on refresh. Release years without verified sources remain unknown and sort last.

## Sources and process

Product data was checked against Coca-Cola's US pages on November 4, 2026. Ingredient names are standardized for comparison (for example, preservative purpose notes are omitted); the linked official labels provide full wording. Identical ingredient names do not establish identical recipes or amounts. Nutrition is stored at the source's serving size; normalization is calculated and can introduce rounding. The introduction expresses a personal opinion about health, rather than an archive finding.

- [Coca-Cola Original, Caffeine Free, and Mexico](https://www.coca-cola.com/us/en/brands/coca-cola/products/original)
- [Coca-Cola Zero Sugar](https://www.coca-cola.com/us/en/brands/coca-cola/products/zero)
- [Cherry and Vanilla](https://www.coca-cola.com/us/en/brands/coca-cola/products/coca-cola-flavors)
- [Diet Coke](https://www.coca-cola.com/us/en/brands/diet-coke/products)
- [Sprite](https://www.coca-cola.com/us/en/brands/sprite/products)
- [Fanta](https://www.coca-cola.com/us/en/brands/fanta/products)

Product photographs were supplied by the student in the CokeImages folder. Products without a matching photograph use a CSS can illustration. DM Sans and Playfair Display are served by Google Fonts, with local system-font fallbacks. Community entries are marked as unverified.

OpenAI Codex assisted with React implementation, CSS design, organizing source data, documentation, and build verification. Prompts included the assignment brief, the title “Coke Zero-Common Ground,” the family-debate introduction, and requests for filters by flavor, branding, sweeteners, nutrition, release date, and common/different ingredients. Review the data and code before submission and personalize the design and explanation as appropriate.

## GitHub Pages

The included `.github/workflows/deploy.yml` builds and deploys on pushes to `main`. Copy this project's files into your `react-demo` repository, commit, and push. In the repository's Settings → Pages, select **GitHub Actions** as the source. Vite's relative base supports a project URL such as `https://tishtosh20.github.io/react-demo/`. The site has not been pushed or published by this local setup. Submit your repository link in Canvas after deployment succeeds.
