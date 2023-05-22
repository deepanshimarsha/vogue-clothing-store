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
            checked={state.filters.showDresses}
            onChange={() => dispatch({ type: "TOGGLE_SHOW_DRESSES" })}
          ></input>
          <label>Dresses</label>
        </div>
        <div>
          {" "}
          <input
            type="checkbox"
            checked={state.filters.showTops}
            onChange={() => dispatch({ type: "TOGGLE_SHOW_TOPS" })}
          ></input>
          <label>Tops</label>
        </div>
        <div>
          <input
            type="checkbox"
            checked={state.filters.showBottoms}
            onChange={() => dispatch({ type: "TOGGLE_SHOW_BOTTOMS" })}
          ></input>
          <label>Bottoms</label>
        </div>
      </div>
    </div>
  );
}
