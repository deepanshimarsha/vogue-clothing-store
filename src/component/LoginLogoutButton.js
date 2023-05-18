import { useProductContext } from "../context/product-context";
import { useNavigate } from "react-router-dom";

export default function LoginLogoutButton({ location }) {
  const { state, dispatch, loginUser, testUser } = useProductContext();

  const navigate = useNavigate();

  const handleClick = () => {
    if (!state.isLoggedIn) {
      loginUser();
    } else {
      //localStorage.removeItem("token");
      if (state.user !== testUser) {
        dispatch({ type: "SET_TEST_USER", data: testUser });
      }
    }

    dispatch({ type: "TOGGLE_IS_LOGGED_IN" });
    navigate(location?.state?.from);
  };
  return (
    <div>
      <button onClick={handleClick}>
        {state.isLoggedIn ? "Logout" : "Login with test credentials"}
      </button>
    </div>
  );
}
