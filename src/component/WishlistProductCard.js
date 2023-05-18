import { useProductContext } from "../context/product-context";

export default function WishlistProductCard(item) {
  const { removeFromWishlist } = useProductContext();

  const { _id, title, price } = item;

  return (
    <div>
      <h1>{title}</h1>
      <p>{price}</p>

      <button onClick={() => removeFromWishlist(_id)}>Remove</button>
    </div>
  );
}
