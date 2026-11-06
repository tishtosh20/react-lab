# Coke Zero—Common Ground

A React archive about a family debate over Coke Zero and Diet Coke. It displays photos and ingredient lists for 15 Coca-Cola Company drinks. Use the brand dropdown to see one brand at a time. The comparison section shows shared and unique ingredients for any two drinks.

## Setup

Run `npm ci`, then `npm run dev`. Run `npm run build` to create the production site. The `Library` component uses `useState` for the dropdown, `filter()` to pick the matching drinks, and `map()` to render the cards. The drink data is in `src/products.js`, and all styles are in `src/style.css`, with landing settings under the Landing page comment.

## Sources and process

Product data was checked against Coca-Cola's US pages on November 4, 2026. The archive uses shortened ingredient names. The linked official labels provide full wording.

- [Coca-Cola Original, Caffeine Free, and Mexico](https://www.coca-cola.com/us/en/brands/coca-cola/products/original)
- [Coca-Cola Zero Sugar](https://www.coca-cola.com/us/en/brands/coca-cola/products/zero)
- [Cherry and Vanilla](https://www.coca-cola.com/us/en/brands/coca-cola/products/coca-cola-flavors)
- [Diet Coke](https://www.coca-cola.com/us/en/brands/diet-coke/products)
- [Sprite](https://www.coca-cola.com/us/en/brands/sprite/products)
- [Fanta](https://www.coca-cola.com/us/en/brands/fanta/products)

The archive uses product photographs from the student's CokeImages folder and official packshots from the Coca-Cola product pages linked above.

OpenAI Codex assisted with React implementation, CSS design, organizing source data, documentation, and build verification. Prompts included the assignment brief, the title “Coke Zero-Common Ground,” the family-debate introduction, and a request to simplify the project to one brand filter and a still can. Review the data and code before submission and personalize the design and explanation as appropriate.

The landing page displays the supplied cola-can model using [React Bits Model Viewer](https://reactbits.dev/components/model-viewer). The viewer is in `src/ModelViewer.jsx`, and the can settings are in `src/CanPreview.jsx`. See `REACT-BITS-LICENSE` for the viewer license.

## GitHub Pages

The included `.github/workflows/deploy.yml` builds and deploys on pushes to `main`. Copy this project's files into your `react-demo` repository, commit, and push. In the repository's Settings → Pages, select **GitHub Actions** as the source. Vite's relative base supports a project URL such as `https://tishtosh20.github.io/react-demo/`. The site has not been pushed or published by this local setup. Submit your repository link in Canvas after deployment succeeds.
