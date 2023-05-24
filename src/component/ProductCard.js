import { NavLink, Navigate } from "react-router-dom";
import { useProductContext } from "../context/product-context";
import { useNavigate } from "react-router-dom";
import "../styles/product-card.css";

export default function ProductCard(item) {
  const {
    state,
    addToCart,
    addToWishlist,
    findInCart,
    findInWishlist,
    removeFromWishlist,
  } = useProductContext();
  const { _id, img, title, price, categoryName, details } = item;
  //console.log(state.cart);
  const indexCart = findInCart(_id);
  const indexWishlist = findInWishlist(_id);
  const navigate = useNavigate();

  const handleClickForCart = () => {
    if (indexCart === -1) {
      addToCart(item);
    } else {
      navigate("/cart");
    }
    console.log(state.cart);
  };

  const handleClickForWishlist = () => {
    if (indexWishlist === -1) {
      addToWishlist(item);
    } else {
      removeFromWishlist(item._id);
    }
  };

  return (
    <div className="card">
      <NavLink to={`/details/${item._id}`}>
        {" "}
        <img src={img} alt="women-product" style={{ width: "100%" }} />
      </NavLink>

      <p className="prod-title">{title}</p>
      <p className="price">Rs. {price}</p>
      <button onClick={handleClickForCart}>
        {indexCart === -1 ? "Add to Cart" : "Go to Cart"}
      </button>
      <span
        role="button"
        className="wishlist-icon"
        onClick={handleClickForWishlist}
      >
        {indexWishlist === -1 ? (
          <i
            class="far fa-heart"
            aria-hidden="true"
            style={{
              fontSize: "24px",
              color: "black",
            }}
          ></i>
        ) : (
          <i class="fa fa-heart" style={{ fontSize: "24px", color: "red" }}></i>
        )}
      </span>
    </div>
  );
}
