import { useProductContext } from "../context/product-context";

export default function PriceFilter() {
  const { state, dispatch } = useProductContext();
  return (
    <div>
      <div className="price-label">
        <label>Price : Rs.{state.filters.priceRange}</label>
      </div>

      <div className="price-range">
        <div className="price">
          {" "}
          <div className="min-price">Rs.100</div>
          <div className="max-price">Rs.1000</div>
        </div>

        <div className="price-input">
          <input
            onChange={(e) => {
              dispatch({ type: "SET_PRICE_RANGE", value: e.target.value });
            }}
            type="range"
            min="100"
            max="5000"
            step="100"
            value={state.filters.priceRange}
          ></input>
        </div>
      </div>
    </div>
  );
}
