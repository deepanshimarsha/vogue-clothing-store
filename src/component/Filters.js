import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
import SortFilter from "./SortFilter";

export default function Filters() {
  return (
    <div>
      <h1>Filters</h1>
      <CategoryFilter />
      <SortFilter />
      <PriceFilter />
    </div>
  );
}
