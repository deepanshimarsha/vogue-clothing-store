import { useProductContext } from "../context/product-context";
export default function CategoryFilter() {
  const { state, dispatch } = useProductContext();

  return (
    <div>
      <div className="category-label">
        <label>Category</label>
      </div>
      <div className="category-input">
        {" "}
        <div>
          <input
            type="checkbox"
            checked={state.filters.showMen}
            onChange={() => dispatch({ type: "TOGGLE_SHOW_MEN" })}
          ></input>
          <label>Men</label>
        </div>
        <div>
          {" "}
          <input
            type="checkbox"
            checked={state.filters.showWomen}
            onChange={() => dispatch({ type: "TOGGLE_SHOW_WOMEN" })}
          ></input>
          <label>Women</label>
        </div>
        <div>
          <input
            type="checkbox"
            checked={state.filters.showKids}
            onChange={() => dispatch({ type: "TOGGLE_SHOW_KIDS" })}
          ></input>
          <label>Kids</label>
        </div>
      </div>
    </div>
  );
}
