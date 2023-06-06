import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
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
      toast("Added to wishlist", { className: "toast-message" });
    } else {
      navigate("/wishlist");
    }
  };

  const qtyDecrement = () => {
    if (qty !== 1) {
      decremnetProductQty(_id);
    } else {
      removeFromCart(_id);
    }
  };

  return (
    <div className="cart-card-container">
      {/* <div className="icon-btn" onClick={() => removeFromCart(_id)}>
        <i class="fa fa-close" style={{ fontSize: "24px", color: "black" }}></i>
      </div> */}

      <img src={img} style={{ width: "25%" }} alt="product" />

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
