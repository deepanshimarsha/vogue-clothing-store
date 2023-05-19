import { useProductContext } from "../context/product-context";
import UserProfile from "../component/UserProfile";
import UserAddress from "../component/UserAddress";
import { useEffect } from "react";

export default function UserAccount() {
  const { state } = useProductContext();
  const isLoggedIn = state.isLoggedIn;

  //console.log(isLoggedIn);
  return (
    <div>
      {isLoggedIn && (
        <div>
          <UserProfile />
          <UserAddress />
        </div>
      )}
    </div>
  );
}
