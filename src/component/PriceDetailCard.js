import { useProductContext } from "../context/product-context";

export default function PriceDetailCard() {
  const { state } = useProductContext();
  const totalPrice = state.cart.reduce(
    (acc, curr) => acc + Number(curr.price),
    0
  );
  //console.log("a", totalPrice);
  return (
    <div>
      <h1>Price Details</h1>
      <h3>SubTotal : {totalPrice}</h3>
      <button>Checkout</button>
    </div>
  );
}
