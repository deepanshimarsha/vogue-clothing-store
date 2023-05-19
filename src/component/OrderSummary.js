import { useProductContext } from "../context/product-context";
import AddressCard from "./AddressCard";

export default function OrderSummary() {
  const { state } = useProductContext();

  return (
    <div>
      <h1>Order Details</h1>
      {state.cart.map(({ title, qty }) => {
        return (
          <p>
            {title} - {qty}
          </p>
        );
      })}

      <h2>Price Details</h2>
      {state.cart.map(({ title, price, qty }) => {
        return (
          <p>
            {title}({qty}) - Rs. {Number(price) * Number(qty)}
          </p>
        );
      })}

      <h2>
        Total Price : Rs.
        {state.cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0)}
      </h2>

      <h2>Deliver To </h2>
      <AddressCard {...state.checkoutAddress} />
    </div>
  );
}
