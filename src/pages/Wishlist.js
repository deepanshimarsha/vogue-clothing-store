import { useEffect } from "react";
import { useProductContext } from "../context/product-context";
import WishlistProductCard from "../component/WishlistProductCard";

export default function Wishlist() {
  const { state, getWishlist } = useProductContext();
  const wishlistLen = state.wishlist.length;

  useEffect(() => {
    getWishlist();
  }, []);
  return (
    <div>
      {wishlistLen !== 0 ? (
        state.wishlist.map((item) => {
          return <WishlistProductCard {...item} />;
        })
      ) : (
        <p>wishlist is empty</p>
      )}
    </div>
  );
}
