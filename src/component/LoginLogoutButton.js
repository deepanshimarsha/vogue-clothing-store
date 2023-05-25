import { useProductContext } from "../context/product-context";
import { useNavigate } from "react-router-dom";
import "../styles/login-page.css";

export default function LoginLogoutButton({ location }) {
  const { state, dispatch, loginUser } = useProductContext();

  const navigate = useNavigate();

  //console.log(location?.state?.from?.pathname === "/login");

  const handleClick = () => {
    if (!state.isLoggedIn) {
      loginUser();
      if (
        location?.state?.from?.pathname === "/login" ||
        location?.state?.from?.pathname === "/signup"
      ) {
        navigate("/");
      } else {
        navigate(location?.state?.from);
      }
    } else {
      localStorage.removeItem("loginToken");
      // if (state.user !== testUser) {
      //   dispatch({ type: "SET_TEST_USER", data: testUser });
      // }
      navigate("/");
    }

    dispatch({ type: "TOGGLE_IS_LOGGED_IN" });
  };
  return (
    <div>
      <button className="login-btn" onClick={handleClick} type="submit">
        {state.isLoggedIn ? "Logout" : "Login with test credentials"}
      </button>
    </div>
  );
}
