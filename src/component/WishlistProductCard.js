import { useProductContext } from "../context/product-context";
import { useNavigate } from "react-router-dom";

export default function WishlistProductCard(item) {
  const { removeFromWishlist, state, findInCart, addToCart } =
    useProductContext();

  const { _id, title, price } = item;

  const indexCart = findInCart(_id);

  const navigate = useNavigate();

  const handleClickForCart = () => {
    if (indexCart === -1) {
      addToCart(item);
    } else {
      navigate("/cart");
    }
  };

  return (
    <div>
      <h1>{title}</h1>
      <p>{price}</p>

      <button onClick={() => removeFromWishlist(_id)}>Remove</button>
      <button onClick={handleClickForCart}>
        {indexCart === -1 ? "move to cart" : "already in cart"}
      </button>
    </div>
  );
}
