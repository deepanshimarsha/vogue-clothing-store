import CartProductCard from "../component/CartProductCard";
import ProductCard from "../component/ProductCard";
import { useProductContext } from "../context/product-context";

export default function () {
  const { state } = useProductContext();
  const cartLen = state.cart.length;

  return (
    <div>
      {cartLen !== 0 ? (
        state.cart.map((item) => {
          return <CartProductCard {...item} />;
        })
      ) : (
        <p>cart is empty</p>
      )}
    </div>
  );
}
