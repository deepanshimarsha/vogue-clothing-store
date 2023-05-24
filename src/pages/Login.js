import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import LogoutButton from "../component/LoginLogoutButton";
import { useProductContext } from "../context/product-context";
import "../styles/login-page.css";
import Loading from "../component/Loading";

export default function Login() {
  const { state } = useProductContext();
  const location = useLocation();
  //console.log(location);

  return (
    <div className="login-main">
      <div className="form-background">
        <h2>Login</h2>
        <div className="login-form">
          <input type="text" value={state.user.email}></input>
          <label>Email</label>

          <input type="password" value={state.user.password}></input>
          <label>Password</label>

          <p>
            <LogoutButton location={location} />
          </p>
        </div>
        <div className="create-account-wrap">
          <p>
            Not a Member?
            <NavLink to="/signup" state={{ from: location?.state?.from }}>
              Create New Account
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}
