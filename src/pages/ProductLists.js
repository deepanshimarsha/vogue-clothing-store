import { useProductContext } from "../context/product-context";
import ProductCard from "../component/ProductCard";
import { NavLink } from "react-router-dom";
import Filters from "../component/Filters";
import "../styles/product-list.css";
import { useEffect } from "react";
import Loading from "../component/Loading";

export default function ProductList() {
  const { state, dispatch, getProductData } = useProductContext();

  // useEffect(() => {
  //   dispatch({ type: "FILTER_PRODUCTS" });
  // }, [
  //   state.filters.sortBy,
  //   state.filters.priceRange,
  //   state.filters.searchInput,

  // ]);
  useEffect(() => {
    getProductData();
  }, []);

  console.log(state.isLoading);
  //console.log("cart", state.cart);
  if (state.isLoading) {
    return <Loading />;
  }

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
