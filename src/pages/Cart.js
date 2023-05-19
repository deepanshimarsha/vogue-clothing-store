import { useEffect } from "react";
import CartProductCard from "../component/CartProductCard";
import { useProductContext } from "../context/product-context";
import PriceDetailCard from "../component/PriceDetailCard";

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
        <div>
          <PriceDetailCard />
          {state.cart.map((item) => {
            return (
              <div>
                <CartProductCard {...item} />
              </div>
            );
          })}
        </div>
      ) : (
        <p>cart is empty</p>
      )}
    </div>
  );
}
