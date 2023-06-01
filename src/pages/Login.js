import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import LogoutButton from "../component/LoginLogoutButton";
import { useProductContext } from "../context/product-context";
import "../styles/login-page.css";

import { useEffect } from "react";

export default function Login() {
  const { state, dispatch, testUser } = useProductContext();
  const location = useLocation();
  console.log("location", location);
  useEffect(() => {
    dispatch({ type: "SET_TEST_USER", data: testUser });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const ToggleShowPassword = () => {
    dispatch({ type: "TOGGLE_SHOW_PASSWORD" });
  };
  return (
    <div className="login-main">
      <div className="form-background">
        <h2>Login</h2>
        <div className="login-form">
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              type="text"
              value={state.user.email}
              autocomplete="on"
            ></input>
            <label>Email</label>

            <input
              type={state.showPassword ? "text" : "password"}
              value={state.user.password}
              autocomplete="on"
            ></input>

            <div className="password-label">
              <label>Password</label>

              <div className="show-password">
                <input
                  type="checkbox"
                  value={state.showPassword}
                  onChange={ToggleShowPassword}
                ></input>
                <span>show password</span>
              </div>
            </div>

            <p>
              <LogoutButton location={location} />
            </p>
          </form>
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
