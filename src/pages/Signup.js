import { Navigate, useNavigate } from "react-router-dom";
import { useProductContext } from "../context/product-context";
import { useLocation } from "react-router-dom";

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
    <div>
      <label>First Name</label>
      <input
        onChange={(e) =>
          dispatch({
            type: "SET_USER",
            field: "FIRST_NAME",
            value: e.target.value,
          })
        }
      ></input>
      <label>Last Name</label>
      <input
        onChange={(e) =>
          dispatch({
            type: "SET_USER",
            field: "LAST_NAME",
            value: e.target.value,
          })
        }
      ></input>
      <label>Email</label>
      <input
        onChange={(e) =>
          dispatch({
            type: "SET_USER",
            field: "EMAIL",
            value: e.target.value,
          })
        }
      ></input>
      <label>Password</label>
      <input
        onChange={(e) =>
          dispatch({
            type: "SET_USER",
            field: "PASSWORD",
            value: e.target.value,
          })
        }
      ></input>
      <button onClick={handleClick}>Create New Account</button>
    </div>
  );
}
