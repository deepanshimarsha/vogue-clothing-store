import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  const { _id, img, title, price } = item;
  //console.log(state.cart);
  const indexCart = findInCart(_id);
  const indexWishlist = findInWishlist(_id);
  const navigate = useNavigate();

  const handleClickForCart = () => {
    if (!state.isLoggedIn) {
      navigate("/login");
    } else {
      if (indexCart === -1) {
        addToCart(item);
        toast("Added to cart");
      } else {
        navigate("/cart");
      }
    }
  };

  const handleClickForWishlist = () => {
    if (!state.isLoggedIn) {
      navigate("/login");
    } else {
      if (indexWishlist === -1) {
        addToWishlist(item);
        toast("Added to wishlist");
      } else {
        removeFromWishlist(item._id);
      }
    }
  };

  const ratingArrFilled = new Array(Number(item.rating)).fill(1);
  const hollowStar = 5 - Number(item.rating);
  const ratingArr = new Array(hollowStar).fill(0);

  return (
    <div className="card">
      <NavLink to={`/details/${item._id}`}>
        {" "}
        <img src={img} alt="women-product" style={{ width: "100%" }} />
      </NavLink>

      <p className="prod-title">{title}</p>

      <span className="rating">
        <div className="stars">
          {" "}
          {ratingArrFilled.map((star) => {
            return (
              <span
                class="fa fa-star"
                // style={{ fontSize: "24px" }}
              ></span>
            );
          })}
          {ratingArr.map((star) => {
            return (
              <i
                className="fa fa-star-o "
                // style={{ fontSize: "24px" }}
              ></i>
            );
          })}
        </div>

        <span className="reviews">
          {item.reviews} {item.reviews > 1 ? "reviews" : "review"}
        </span>
      </span>

      <p className="price">Rs. {price}</p>

      <button
        onClick={handleClickForCart}
        style={{ backgroundColor: indexCart === -1 ? "black" : "#4C4C4C" }}
      >
        {indexCart === -1 ? "Add to Cart" : "Go to Cart"}
      </button>
      <span
        role="button"
        className="wishlist-icon"
        onClick={handleClickForWishlist}
      >
        {indexWishlist === -1 ? (
          <i
            class="fa fa-heart-o wishlist-icon-before"
            aria-hidden="true"
            style={{
              fontSize: "24px",
            }}
          ></i>
        ) : (
          <i
            class="fa fa-heart wishlist-icon-before after"
            style={{ fontSize: "24px", color: "red" }}
          ></i>
        )}
      </span>
    </div>
  );
}
