import CartProductCard from "../component/CartProductCard";
import { useProductContext } from "../context/product-context";
import { ToastContainer } from "react-toastify";
import PriceDetailCard from "../component/PriceDetailCard";
import "../styles/cart-page.css";

export default function Cart() {
  const { state } = useProductContext();

  const cartLen = state.cart.length;

  return (
    <div className="cart-main-container">
      <ToastContainer autoClose={1000} position="top-center" />
      {cartLen !== 0 ? (
        <div className="cart-main">
          <div className="product-main">
            {state.cart.map((item) => {
              return <CartProductCard {...item} />;
            })}
          </div>
          <div className="price-section">
            <PriceDetailCard />
          </div>
        </div>
      ) : (
        <h3>Your Cart Is Empty!</h3>
      )}
    </div>
  );
}
