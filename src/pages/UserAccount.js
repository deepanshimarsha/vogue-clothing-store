import { useProductContext } from "../context/product-context";
import UserProfile from "../component/UserProfile";

export default function UserAccount() {
  const { state } = useProductContext();
  const isLoggedIn = state.isLoggedIn;

  //console.log(isLoggedIn);
  return (
    <div>
      {isLoggedIn && (
        <div>
          <UserProfile />
        </div>
      )}
    </div>
  );
}
