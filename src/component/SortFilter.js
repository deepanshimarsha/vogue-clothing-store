import { useProductContext } from "../context/product-context";

export default function SortFilter() {
  const { dispatch } = useProductContext();
  return (
    <div>
      <div className="sort-label">
        <label>Sort By</label>
      </div>
      <div className="sort-select">
        <select
          onChange={(e) =>
            dispatch({ type: "SET_SORT_BY", option: e.target.value })
          }
        >
          <option hidden="true" default="true">
            Choose
          </option>

          <option value="DESC">Price: High to Low</option>
          <option value="ASC">Price Low to High</option>
          <option value="RATING">Customer Rating</option>
        </select>
      </div>
    </div>
  );
}
