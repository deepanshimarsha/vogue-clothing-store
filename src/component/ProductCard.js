import { NavLink, Navigate } from "react-router-dom";
import { useProductContext } from "../context/product-context";
import { useNavigate } from "react-router-dom";

export default function ProductCard(item) {
  const { state, addToCart, addToWishlist, findInCart, findInWishlist } =
    useProductContext();
  const { _id, img, title, price, categoryName, details } = item;

  const indexCart = findInCart(_id);
  const indexWishlist = findInWishlist(_id);
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
      <img src={img} alt="women-product" height="100px" />
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
          <p>category : {categoryName}</p>
        </div>
      )}
    </div>
  );
}
