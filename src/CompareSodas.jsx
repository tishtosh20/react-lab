import { useState } from "react";
import { products } from "./products.js";

function SodaSelect({ id, label, value, onChange }) {
  return (
    <div className="comparison-select">
      <label htmlFor={id}>{label}</label>
      <select id={id} value={value} onChange={(event) => onChange(event.target.value)}>
        {products.map((drink) => (
          <option key={drink.id} value={drink.id}>{drink.name}</option>
        ))}
      </select>
    </div>
  );
}

export function CompareSodas() {
  const [firstId, setFirstId] = useState("zero");
  const [secondId, setSecondId] = useState("diet");

  const first = products.find((drink) => drink.id === firstId);
  const second = products.find((drink) => drink.id === secondId);

  // Keep an ingredient in the shared list if it appears in both drinks.
  const shared = first.ingredients.filter((item) => second.ingredients.includes(item));
  const firstOnly = first.ingredients.filter((item) => !second.ingredients.includes(item));
  const secondOnly = second.ingredients.filter((item) => !first.ingredients.includes(item));

  return (
    <section className="archive comparison" id="compare" aria-labelledby="compare-title">
      <h2 id="compare-title">Compare sodas</h2>
      <p>Pick two drinks to see what their ingredient lists have in common.</p>
      <div className="comparison-picks">
        <SodaSelect id="first-soda" label="First soda" value={firstId} onChange={setFirstId} />
        <SodaSelect id="second-soda" label="Second soda" value={secondId} onChange={setSecondId} />
      </div>

      <div className="comparison-results" aria-live="polite">
        <article className="comparison-shared">
          <h3>Shared ingredients</h3>
          <p>{shared.length ? shared.join(", ") : "No shared ingredients."}</p>
        </article>
        <article>
          <h3>Only in {first.name}</h3>
          <p>{firstOnly.length ? firstOnly.join(", ") : "No ingredients unique to this soda."}</p>
        </article>
        <article>
          <h3>Only in {second.name}</h3>
          <p>{secondOnly.length ? secondOnly.join(", ") : "No ingredients unique to this soda."}</p>
        </article>
      </div>
    </section>
  );
}
