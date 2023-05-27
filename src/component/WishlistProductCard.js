import { useProductContext } from "../context/product-context";
import { toast } from "react-toastify";
import { useNavigate, NavLink } from "react-router-dom";
import "../styles/wishlist.css";

export default function WishlistProductCard(item) {
  const {
    removeFromWishlist,

    findInCart,
    addToCart,
  } = useProductContext();

  const { _id, title, price, img } = item;

  const indexCart = findInCart(_id);

  const navigate = useNavigate();

  const handleClickForCart = () => {
    if (indexCart === -1) {
      addToCart(item);
      toast("Added to cart");
    } else {
      navigate("/cart");
    }
  };

  return (
    <div className="wishlist-card">
      <span
        role="button"
        className="icon-background"
        onClick={() => removeFromWishlist(_id)}
      >
        <i class="fa fa-close" style={{ fontSize: "24px", color: "black" }}></i>
      </span>
      <NavLink to={`/details/${item._id}`}>
        <img src={img} style={{ width: "100%" }} alt="product" />
      </NavLink>

      <p className="wishlist-title">{title}</p>
      <p className="price">Rs. {price}</p>

      <div className="wishlist-btn-container">
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
