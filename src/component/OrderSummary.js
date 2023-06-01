import { useProductContext } from "../context/product-context";
import AddressCard from "./AddressCard";
import "../styles/checkout.css";

export default function OrderSummary() {
  const { state } = useProductContext();
  console.log("checkoutaddress", state.checkoutAddress);
  return (
    <div className="order-card">
      <div className="order-detail">
        <span className="order-heading" style={{ fontSize: "30px" }}>
          Order Details
        </span>
        <hr></hr>
        {state.cart.map(({ title, qty }) => {
          return (
            <p>
              <span>{title}</span> <span>{qty}</span>
            </p>
          );
        })}
      </div>
      <hr></hr>
      <div className="price-detail">
        <span className="order-heading">Price Details</span>
        <hr></hr>
        {state.cart.map(({ title, price, qty }) => {
          return (
            <p>
              <span>
                {title}({qty})
              </span>{" "}
              <span>Rs. {Number(price) * Number(qty)}</span>
            </p>
          );
        })}
      </div>

      <hr></hr>
      <div className="total-price">
        <span className="order-heading">Total Price : </span>
        <span className="order-heading">
          Rs. {state.cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0)}
        </span>
      </div>

      <hr></hr>
      <div className="order-address">
        <span className="order-heading">Deliver To </span>
        {!state.checkoutAddress.length && (
          <div>
            <p style={{ color: "red" }}>*Add an address before placing order</p>
            {/* <AddressCard {...testAddress} /> */}
          </div>
        )}
        {state.checkoutAddress.length && (
          <div>
            <AddressCard {...state.checkoutAddress[0]} />
          </div>
        )}
      </div>

      <button className="place-order-btn">Place Order</button>
    </div>
  );
}
