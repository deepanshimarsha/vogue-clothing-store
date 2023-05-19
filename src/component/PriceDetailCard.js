import { useProductContext } from "../context/product-context";
import { useNavigate } from "react-router-dom";

export default function PriceDetailCard() {
  const { state } = useProductContext();
  const navigate = useNavigate();
  const totalPrice = state.cart.reduce(
    (acc, curr) => acc + Number(curr.price),
    0
  );
  //console.log("a", totalPrice);
  return (
    <div>
      <h1>Price Details</h1>
      <h3>SubTotal : {totalPrice}</h3>
      <button onClick={() => navigate("/checkout")}>Checkout</button>
    </div>
  );
}
