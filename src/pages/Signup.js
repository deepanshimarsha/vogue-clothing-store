import { NavLink, useNavigate } from "react-router-dom";
import { useProductContext } from "../context/product-context";
import { useLocation } from "react-router-dom";
import "../styles/signup-page.css";
import { useEffect, useState } from "react";

export default function Signup() {
  const { state, dispatch, signup, testUser } = useProductContext();

  const [confirmPass, setConfirmPass] = useState("");
  const [pass, setPass] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({ type: "SET_TEST_USER", data: testUser });
    dispatch({ type: "SET_ERROR", error: "" });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleClick = () => {
    if (state.user.email === testUser.email) {
      dispatch({ type: "SET_ERROR", error: "Email is already registered!" });
    } else if (pass !== confirmPass) {
      dispatch({ type: "SET_ERROR", error: "Passwords do not match" });
    } else {
      signup();
      dispatch({ type: "TOGGLE_IS_LOGGED_IN" });
      navigate(location?.state?.from);
    }
  };
  const ToggleShowPassword = () => {
    dispatch({ type: "TOGGLE_SHOW_PASSWORD" });
  };

  return (
    <div className="signup-container">
      <div className="thumbnail-container">
        <div className="thumbnail-heading">
          <h1>Welcome!</h1>
          <p>All Your Styles Are Here.</p>
        </div>
      </div>

      <div class="signup_form">
        <h3>CREATE ACCOUNT</h3>
        <span className="email-error">
          *{state.error.showError && state.error.error}
        </span>
        <div class="signup_group">
          <form>
            <input
              value={state.user.firstName}
              type="text"
              autocomplete="on"
              onChange={(e) =>
                dispatch({
                  type: "SET_USER",
                  field: "FIRST_NAME",
                  value: e.target.value,
                })
              }
            ></input>
            <label>First Name</label>

            <input
              value={state.user.lastName}
              type="text"
              autocomplete="on"
              onChange={(e) =>
                dispatch({
                  type: "SET_USER",
                  field: "LAST_NAME",
                  value: e.target.value,
                })
              }
            ></input>

            <label>Last Name</label>

            <input
              value={state.user.email}
              type="text"
              autocomplete="on"
              onChange={(e) =>
                dispatch({
                  type: "SET_USER",
                  field: "EMAIL",
                  value: e.target.value,
                })
              }
            ></input>

            <label className="email-label">Email </label>

            <input
              value={state.user.password}
              type={state.showPassword ? "text" : "password"}
              autocomplete="on"
              onChange={(e) => {
                setPass(e.target.value);
                dispatch({
                  type: "SET_USER",
                  field: "PASSWORD",
                  value: e.target.value,
                });
              }}
            ></input>

            <div className="password-label">
              <label>Password</label>

              {/* <div className="show-password">
                <input
                  type="checkbox"
                  value={state.user.password}
                  onChange={ToggleShowPassword}
                ></input>
                <span>show password</span>
              </div> */}
            </div>

            <input
              type={state.showPassword ? "text" : "password"}
              value={state.user.password}
              autocomplete="off"
              onChange={(e) => {
                setConfirmPass(e.target.value);
              }}
            ></input>
            <div className="password-label">
              <label>Confirm Password</label>
              <div className="show-password">
                <input
                  type="checkbox"
                  value={state.user.password}
                  onChange={ToggleShowPassword}
                ></input>
                <span>show password</span>
              </div>
            </div>
          </form>
        </div>

        <div class="signup-footer">
          <input
            class="btn btn--form"
            type="submit"
            value="Register"
            onClick={handleClick}
          />

          <NavLink to="/login" state={{ from: "/" }}>
            I am already a member
          </NavLink>
        </div>
      </div>
    </div>
  );
}
