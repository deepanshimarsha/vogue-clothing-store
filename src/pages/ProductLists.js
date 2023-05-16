import { useProductContext } from "../context/product-context";
import ProductCard from "../component/ProductCard";
import { NavLink } from "react-router-dom";

export default function ProductList() {
  const { state } = useProductContext();
  return (
    <div>
      <h1>Product Listing Page</h1>
      <div>
        {state.filteredProducts.map((item) => {
          return (
            <div>
              <ProductCard {...item} />
              <NavLink to={`/details/${item._id}`}>view details</NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
}
