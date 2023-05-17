import { NavLink, Navigate } from "react-router-dom";
import { useProductContext } from "../context/product-context";
import { useNavigate } from "react-router-dom";

export default function ProductCard(item) {
  const { state, addToCart, getCart } = useProductContext();
  const { _id, title, author, price, categoryName, details } = item;

  const index = state.cart.findIndex(({ _id }) => _id === item._id);
  const navigate = useNavigate();

  const handleClick = () => {
    if (index === -1) {
      addToCart(item);
    } else {
      navigate("/cart");
    }
  };

  return (
    <div>
      <h2>{title}</h2>
      <p>{price}</p>
      <button onClick={handleClick}>
        {index === -1 ? "Add to Cart" : "Go to Cart"}
      </button>

      {details && (
        <div>
          <p>author: {author}</p>
          <p>category : {categoryName}</p>
        </div>
      )}
    </div>
  );
}
