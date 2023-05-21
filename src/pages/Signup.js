import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { useProductContext } from "../context/product-context";
import { useLocation } from "react-router-dom";
import "../styles/signup-page.css";

export default function Signup() {
  const { state, dispatch, signup } = useProductContext();

  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    signup();
    dispatch({ type: "TOGGLE_IS_LOGGED_IN" });
    navigate(location?.state?.from);
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

        <div class="signup_group">
          <input
            value={state.user.firstName}
            type="text"
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
            onChange={(e) =>
              dispatch({
                type: "SET_USER",
                field: "EMAIL",
                value: e.target.value,
              })
            }
          ></input>

          <label>Email</label>

          <input
            value={state.user.password}
            type="password"
            onChange={(e) =>
              dispatch({
                type: "SET_USER",
                field: "PASSWORD",
                value: e.target.value,
              })
            }
          ></input>
          <label>Password</label>
        </div>

        <div class="signup-footer">
          <input
            class="btn btn--form"
            type="submit"
            value="Register"
            onClick={handleClick}
          />

          <NavLink to="/login">I am already a member</NavLink>
        </div>
      </div>
    </div>
  );
}
