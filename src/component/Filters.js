import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
import SortFilter from "./SortFilter";
import "../styles/product-list.css";
import { useProductContext } from "../context/product-context";

export default function Filters() {
  const { state, dispatch } = useProductContext();
  const handleClick = () => {};
  return (
    <div className="filters">
      <div className="filter-heading">
        <span>Filter</span>
        <button className="btn-clear" onClick={handleClick}>
          clear
        </button>
      </div>
      <div className="category-filter">
        <CategoryFilter />
      </div>

      <div className="price-filter">
        <PriceFilter />
      </div>
      <div className="sort-filter">
        <SortFilter />
      </div>
    </div>
  );
}
