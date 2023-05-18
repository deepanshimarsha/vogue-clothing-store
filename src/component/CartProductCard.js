import { useProductContext } from "../context/product-context";

export default function CartProductCard(item) {
  const { removeFromCart, incrementProductQty, decremnetProductQty } =
    useProductContext();

  const { _id, title, price, qty } = item;

  return (
    <div>
      <h1>{title}</h1>
      <p>{price}</p>
      <button onClick={() => incrementProductQty(_id)}>+</button>
      {qty}
      <button onClick={() => decremnetProductQty(_id)}>-</button>
      <br></br>
      <button onClick={() => removeFromCart(_id)}>Remove</button>
    </div>
  );
}
