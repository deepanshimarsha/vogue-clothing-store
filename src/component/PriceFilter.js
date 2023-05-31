import { useProductContext } from "../context/product-context";

export default function PriceFilter() {
  const { state, dispatch } = useProductContext();
  return (
    <div>
      <div className="price-label">
        {state.filters.priceRange === "" ? (
          <label>Price</label>
        ) : (
          <label>
            Price : <span>{state.filters.priceRange}</span>
          </label>
        )}
      </div>

      <div className="price-range">
        <div className="price">
          {" "}
          <div className="min-price">Rs.1k</div>
          <div className="max-price">Rs.5k</div>
        </div>

        <div className="price-input">
          <input
            onChange={(e) => {
              dispatch({ type: "SET_PRICE_RANGE", value: e.target.value });
            }}
            type="range"
            min="1000"
            max="5000"
            step="100"
            value={state.filters.priceRange}
          ></input>
        </div>
      </div>
    </div>
  );
}
