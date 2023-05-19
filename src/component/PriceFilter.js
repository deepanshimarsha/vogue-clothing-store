import { useProductContext } from "../context/product-context";

export default function PriceFilter() {
  const { state, dispatch } = useProductContext();
  return (
    <div>
      <label>Price : {state.filters.priceRange}</label>
      <div>100</div>
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
      <div>1000</div>
    </div>
  );
}
