import { useProductContext } from "../context/product-context";
export default function CategoryFilter() {
  const { state, dispatch } = useProductContext();

  return (
    <div>
      <h2>Categories</h2>
      <input
        type="checkbox"
        checked={state.filters.showMen}
        onChange={() => dispatch({ type: "TOGGLE_SHOW_MEN" })}
      ></input>
      <label>Men</label>
      <input
        type="checkbox"
        checked={state.filters.showWomen}
        onChange={() => dispatch({ type: "TOGGLE_SHOW_WOMEN" })}
      ></input>
      <label>Women</label>
      <input
        type="checkbox"
        checked={state.filters.showKids}
        onChange={() => dispatch({ type: "TOGGLE_SHOW_KIDS" })}
      ></input>
      <label>Kids</label>
    </div>
  );
}
