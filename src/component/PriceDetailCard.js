import { useProductContext } from "../context/product-context";
import { useNavigate } from "react-router-dom";
import "../styles/cart-page.css";

export default function PriceDetailCard() {
  const { state } = useProductContext();
  const navigate = useNavigate();
  const totalPrice = state.cart.reduce(
    (acc, curr) => acc + Number(curr.price) * Number(curr.qty),
    0
  );

  const totalItem = state.cart.reduce((acc, curr) => curr.qty + acc, 0);
  //console.log("a", totalPrice);
  return (
    <div>
      <p className="price-heading">Price Details</p>
      <div className="price-para">
        <hr></hr>
        <p>
          <span>
            Price ({totalItem} {totalItem > 1 ? "items" : "item"}) :
          </span>
          <span> ₹{totalPrice}</span>
        </p>
        <p>
          <span>Delivery Charges :</span> <span>₹0</span>
        </p>
        <p>
          <span>Discount :</span> <span>₹0</span>
        </p>
        <hr></hr>
      </div>
      <div>
        <span className="price-footer">
          <span>TOTAL AMOUNT : </span>
          <span>₹{totalPrice}</span>
        </span>
        <hr></hr>
      </div>

      <button className="checkout-btn" onClick={() => navigate("/checkout")}>
        Checkout
      </button>
    </div>
  );
}
