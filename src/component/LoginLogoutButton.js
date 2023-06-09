import { useProductContext } from "../context/product-context";
import { useNavigate } from "react-router-dom";
import "../styles/login-page.css";

export default function LoginLogoutButton({ location }) {
  const { state, dispatch, loginUser } = useProductContext();

  const navigate = useNavigate();

  console.log(location?.state?.from?.pathname === "/login");

  const handleClick = (e) => {
    e.preventDefault();
    if (!state.isLoggedIn) {
      loginUser();
      dispatch({ type: "SET_TEST_ADDRESS" });
      if (
        location?.state?.from?.pathname === "/login" ||
        location?.state?.from?.pathname === "/signup"
      ) {
        navigate("/");
      } else if (!location?.state) {
        navigate("/products");
      } else {
        navigate(location?.state?.from);
      }
    } else {
      localStorage.removeItem("loginToken");
      dispatch({ type: "CLEAR_CART" });
      dispatch({ type: "CLEAR_WISHLIST" });
      dispatch({ type: "CLEAR_CHECKOUT_ADDRESS" });
      dispatch({ type: "CLEAR_TEST_ADDRESS_ON_SIGNUP" });
      navigate("/");
    }

    dispatch({ type: "TOGGLE_IS_LOGGED_IN" });
  };
  return (
    <div>
      <button
        className="login-btn"
        onClick={(e) => handleClick(e)}
        type="submit"
      >
        {state.isLoggedIn ? "Logout" : "Login with test credentials"}
      </button>
    </div>
  );
}
