import { useState } from "react";
import { products } from "./products.js";
import { CanPreview } from "./CanPreview.jsx";
import { CompareSodas } from "./CompareSodas.jsx";

const brands = ["Coca-Cola", "Diet Coke", "Sprite", "Fanta"];
const imageFolder = import.meta.env.BASE_URL + "images/";

export function Library() {
  const [brand, setBrand] = useState("All brands");

  // Changing the dropdown changes which drinks are shown.
  let visibleProducts = products;
  if (brand !== "All brands") {
    visibleProducts = products.filter((drink) => drink.brand === brand);
  }

  return (
    <main>
      <section className="landing">
        <header className="landing-header">
          <nav aria-label="Site navigation">
            <a href="#archive">Soda archive</a>
            <a href="#compare">Compare sodas</a>
          </nav>
          <p className="landing-welcome">Welcome to Zero Common Ground</p>
        </header>
        <div className="landing-stage">
          <CanPreview />
          <div className="landing-heading">
            <p className="landing-label">A family debate, bottled.</p>
            <h1>
              Coke Zero-{" "}
              <span>
                <div className="common-ground"> Common Ground </div>
              </span>
            </h1>
          </div>
        </div>

        <div className="landing-content">
          <p>
            My dad loves Coke Zero, and I love Diet Coke. I think Diet Coke is
            healthier and tastes better, and obviously he thinks otherwise. Here
            is an archive of some Coca-Cola products so that you can explore
            them and come to your own conclusion.
          </p>
        </div>
      </section>

      <section className="archive" id="archive">
        <h2>
          {" "}
          <div className="soda-title">The soda archive</div>
        </h2>
        <div className="archive-filter">
          <label htmlFor="soda-filter">Filter by brand</label>
          <select
            id="soda-filter"
            value={brand}
            onChange={(event) => setBrand(event.target.value)}
          >
            <option>All brands</option>
            {brands.map((name) => (
              <option key={name}>{name}</option>
            ))}
          </select>
          <p aria-live="polite">
            Showing {visibleProducts.length} of {products.length} drinks
          </p>
        </div>

        <div className="drink-grid">
          {visibleProducts.map((drink) => (
            <article className="drink" key={drink.id}>
              {drink.id === "diet" && (
                <img
                  className="diet-pick"
                  src={imageFolder + "diet-coke-my-pick.png"}
                  alt="My pick! (The best)"
                  loading="lazy"
                />
              )}
              <img
                src={imageFolder + drink.image}
                alt={drink.name}
                loading="lazy"
              />
              <div className="drink-details">
                <h3>{drink.name}</h3>
                <p>
                  <strong>Ingredients:</strong> {drink.ingredients.join(", ")}.
                </p>
                <a href={drink.source}>Official product label</a>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CompareSodas />
    </main>
  );
}
