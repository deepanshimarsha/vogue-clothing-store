import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import LogoutButton from "../component/LoginLogoutButton";
import { useProductContext } from "../context/product-context";

export default function Login() {
  const { state } = useProductContext();
  const location = useLocation();
  return (
    <div>
      <h1>Login</h1>
      <label>Email</label>
      <input value={state.user.email}></input>
      <label>Password</label>
      <input value={state.user.password}></input>
      <LogoutButton location={location} />

      <NavLink to="/signup" state={{ from: location?.state?.from }}>
        Create New Account
      </NavLink>
    </div>
  );
}
