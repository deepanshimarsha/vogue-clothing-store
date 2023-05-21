import { useProductContext } from "../context/product-context";
import ProductCard from "../component/ProductCard";
import { NavLink } from "react-router-dom";
import Filters from "../component/Filters";
import "../styles/product-list.css";

export default function ProductList() {
  const { state } = useProductContext();
  return (
    <div className="content">
      <div className="filter-container">
        <Filters />
      </div>
      <div className="products-container">
        {state.filteredProducts.map((item) => {
          return (
            <div>
              <ProductCard {...item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
