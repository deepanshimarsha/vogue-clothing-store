import { useEffect } from "react";
import CartProductCard from "../component/CartProductCard";
import ProductCard from "../component/ProductCard";
import { useProductContext } from "../context/product-context";

export default function () {
  const { state, getCart } = useProductContext();
  //console.log(state.cart);
  const cartLen = state.cart.length;

  useEffect(() => {
    getCart();
  }, []);

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
