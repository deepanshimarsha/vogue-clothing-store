import { NavLink, Navigate } from "react-router-dom";
import { useProductContext } from "../context/product-context";
import { useNavigate } from "react-router-dom";

export default function ProductCard(item) {
  const { state, addToCart, addToWishlist } = useProductContext();
  const { _id, title, author, price, categoryName, details } = item;

  const indexCart = state.cart.findIndex(({ _id }) => _id === item._id);
  const indexWishlist = state.wishlist.findIndex(({ _id }) => _id === item._id);
  const navigate = useNavigate();

  const handleClickForCart = () => {
    if (indexCart === -1) {
      addToCart(item);
    } else {
      navigate("/cart");
    }
  };

  const handleClickForWishlist = () => {
    if (indexWishlist === -1) {
      addToWishlist(item);
    } else {
      navigate("/wishlist");
    }
  };

  return (
    <div>
      <h2>{title}</h2>
      <p>{price}</p>
      <button onClick={handleClickForCart}>
        {indexCart === -1 ? "Add to Cart" : "Go to Cart"}
      </button>
      <button onClick={handleClickForWishlist}>
        {indexWishlist === -1 ? "Add to Wishlist" : "Go to wishlist"}
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
