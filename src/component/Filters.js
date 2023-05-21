import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
import SortFilter from "./SortFilter";
import "../styles/product-list.css";

export default function Filters() {
  return (
    <div className="filters">
      <div className="filter-heading">
        <span>Filter</span>
        <button className="btn-clear">clear</button>
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
