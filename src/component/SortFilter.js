import { useProductContext } from "../context/product-context";

export default function SortFilter() {
  const { state, dispatch } = useProductContext();
  return (
    <div>
      <select
        onChange={(e) =>
          dispatch({ type: "SET_SORT_BY", method: e.target.value })
        }
      >
        <option selected disabled>
          Sort By
        </option>
        <option value="DESC">Price: High to Low</option>
        <option value="ASC">Price Low to High</option>
        <option value="rating">Customer Rating</option>
      </select>
    </div>
  );
}
