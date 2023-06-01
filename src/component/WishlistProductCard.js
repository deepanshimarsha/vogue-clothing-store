import { useProductContext } from "../context/product-context";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";
import "../styles/wishlist.css";

export default function WishlistProductCard(item) {
  const { removeFromWishlist, incrementProductQty, findInCart, addToCart } =
    useProductContext();

  const { _id, title, price, img } = item;

  const indexCart = findInCart(_id);

  const handleClickForCart = () => {
    if (indexCart === -1) {
      addToCart(item);
      toast("Added to cart");
    } else {
      incrementProductQty(_id);
      toast("Added to cart");
    }
  };
  const handleRemove = () => {
    removeFromWishlist(_id);
    toast("Removed from wishlist");
  };

  return (
    <div className="wishlist-card">
      <span role="button" className="icon-background" onClick={handleRemove}>
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
          Add to Cart
          {/* {indexCart === -1 ? "Move To Cart" : "Already In Cart"} */}
        </button>
      </div>
    </div>
  );
}
