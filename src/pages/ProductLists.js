import { useProductContext } from "../context/product-context";
import ProductCard from "../component/ProductCard";
import { ToastContainer } from "react-toastify";

import Filters from "../component/Filters";
import "../styles/product-list.css";
import { useEffect } from "react";
import Loading from "../component/Loading";

export default function ProductList() {
  const { state, getProductData } = useProductContext();

  useEffect(() => {
    getProductData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  console.log(state.isLoading);
  //console.log("cart", state.cart);
  if (state.isLoading) {
    return <Loading />;
  }

  return (
    <div className="content">
      <div className="toastify">
        <ToastContainer autoClose={1000} position="top-center" />
      </div>

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
