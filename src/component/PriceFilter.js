import { useProductContext } from "../context/product-context";

export default function PriceFilter() {
  const { state, dispatch } = useProductContext();
  return (
    <div>
      <div className="price-label">
        {state.filters.priceRange === "" ? (
          <label>Rating</label>
        ) : (
          <label>
            Rating : <span>{state.filters.priceRange}</span>
          </label>
        )}
      </div>

      <div className="price-range">
        <div className="price">
          {" "}
          <div className="min-price">1 star</div>
          <div className="max-price">5 star</div>
        </div>

        <div className="price-input">
          <input
            onChange={(e) => {
              dispatch({ type: "SET_PRICE_RANGE", value: e.target.value });
            }}
            type="range"
            min="1"
            max="5"
            step="1"
            value={state.filters.priceRange}
          ></input>
        </div>
      </div>
    </div>
  );
}
