import { useProductContext } from "../context/product-context";
import ProductCard from "../component/ProductCard";
import { NavLink } from "react-router-dom";
import Filters from "../component/Filters";
import "../styles/product-list.css";
import { useEffect } from "react";

export default function ProductList() {
  const { state, dispatch } = useProductContext();

  // useEffect(() => {
  //   dispatch({ type: "FILTER_PRODUCTS" });
  // }, [
  //   state.filters.sortBy,
  //   state.filters.priceRange,
  //   state.filters.searchInput,

  // ]);
  console.log("cart", state.cart);
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
