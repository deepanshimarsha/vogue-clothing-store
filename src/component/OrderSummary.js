import { useProductContext } from "../context/product-context";
import AddressCard from "./AddressCard";
import "../styles/checkout.css";
import { useNavigate } from "react-router-dom";

export default function OrderSummary() {
  const { state, dispatch, removeFromCart } = useProductContext();
  const navigate = useNavigate();
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };
  const displayRazorPay = async (amount) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("you are offline");
      return;
    }

    const options = {
      key: "rzp_test_uFzn2d6DrQYTGQ",
      currency: "INR",
      amount: amount * 100,
      name: "Vogue",
      description: "Thanks for purchasing",
      handler: function (response) {
        if (response.razorpay_payment_id) {
          if (state.orders) {
            var order_no = state.orders.length + 1;
          } else {
            order_no = 1;
          }

          dispatch({
            type: "SET_ORDERS",
            order: {
              order: state.cart,
              order_no: order_no,
              total_price: amount,
            },
          });
          state.cart.map(({ _id }) => {
            removeFromCart(_id);
            return 0;
          });
          dispatch({ type: "CLEAR_CART" });
          navigate("/orders");
        }
      },
      prefill: {
        name: "Vogue",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
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

      <button
        className="place-order-btn"
        disabled={!state.checkoutAddress.length ? true : false}
        style={{ opacity: !state.checkoutAddress.length ? 0.7 : 1 }}
        onClick={() => {
          displayRazorPay(
            Number(
              state.cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0)
            )
          );
        }}
      >
        Place Order
      </button>
    </div>
  );
}
