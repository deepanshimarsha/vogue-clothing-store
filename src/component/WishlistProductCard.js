import { useProductContext } from "../context/product-context";
import { useNavigate } from "react-router-dom";
import "../styles/wishlist.css";

export default function WishlistProductCard(item) {
  const { removeFromWishlist, state, findInCart, addToCart } =
    useProductContext();

  const { _id, title, price, img } = item;

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
    <div className="wishlist-card">
      <img src={img} style={{ width: "100%" }} />
      <p className="wishlist-title">{title}</p>
      <p className="price">Rs. {price}</p>

      <div className="wishlist-btn-container">
        <button
          className="wishlist-btn"
          style={{ backgroundColor: "black", color: "white" }}
          onClick={() => removeFromWishlist(_id)}
        >
          Remove
        </button>
        <button
          className="wishlist-btn"
          onClick={handleClickForCart}
          style={{
            backgroundColor: indexCart !== -1 ? "#D3D3D3" : "",
          }}
        >
          {indexCart === -1 ? "Move To Cart" : "Already In Cart"}
        </button>
      </div>
    </div>
  );
}
