import { useNavigate } from "react-router-dom";
import { useProductContext } from "../context/product-context";
import "../styles/cart-product-card.css";
import "../styles/cart-page.css";

export default function CartProductCard(item) {
  const {
    removeFromCart,
    incrementProductQty,
    decremnetProductQty,
    findInWishlist,
    addToWishlist,
  } = useProductContext();

  const { _id, title, price, qty, img } = item;
  const indexWishlist = findInWishlist(_id);
  const navigate = useNavigate();

  const handleClickForWishlist = () => {
    if (indexWishlist === -1) {
      addToWishlist(item);
    } else {
      navigate("/wishlist");
    }
  };

  const qtyDecrement = () => {
    if (qty !== 0) {
      decremnetProductQty(_id);
    } else {
      removeFromCart(_id);
    }
  };

  return (
    <div className="cart-card-container">
      <img src={img} style={{ width: "25%" }} />

      <div className="cart-product-description">
        <p className="cart-product-title">{title}</p>
        <p className="price">Rs. {price}</p>

        <div className="qty">
          <div>
            <span>Quantity</span>:
          </div>

          <button className="qty-btn" onClick={() => incrementProductQty(_id)}>
            +
          </button>
          <span style={{}}>{qty}</span>

          <button className="qty-btn" onClick={() => qtyDecrement(_id)}>
            -
          </button>
          <br></br>
        </div>

        <div className="cart-btn-container">
          <button className="cart-btn" onClick={() => removeFromCart(_id)}>
            Remove
          </button>
          <button
            className="cart-btn"
            onClick={handleClickForWishlist}
            style={{
              backgroundColor: indexWishlist !== -1 ? "#D3D3D3" : "",
            }}
          >
            {" "}
            {indexWishlist === -1 ? "Move To Wishlist" : "Already In Wishlist"}
          </button>
        </div>
      </div>
    </div>
  );
}
