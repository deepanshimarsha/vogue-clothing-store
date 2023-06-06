import { useLocation, useNavigate } from "react-router-dom";
import { useProductContext } from "../context/product-context";
import { useEffect } from "react";
import "../styles/address.css";
import { v4 as uuid } from "uuid";

export default function AddressForm() {
  const { state, dispatch, dummyAddress } = useProductContext();

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    dispatch({ type: "SET_ERROR", error: "" });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleClick = (e) => {
    if (state.newAddress.length === 0) {
      dispatch({ type: "SET_ERROR", error: "Fill The Form" });
    }

    if (
      typeof state.newAddress.name === "undefined" ||
      typeof state.newAddress.postal_code === "undefined" ||
      typeof state.newAddress.phone_no === "undefined" ||
      typeof state.newAddress.address === "undefined" ||
      typeof state.newAddress.city === "undefined" ||
      typeof state.newAddress.state === "undefined" ||
      typeof state.newAddress.country === "undefined"
    ) {
      dispatch({ type: "SET_ERROR", error: "Fill all the required field" });
    } else {
      dispatch({ type: "ADD_ADDRESS", data: state.newAddress });

      if (location?.state?.from) {
        navigate(location?.state?.from);
      } else {
        navigate("/user_address");
      }
    }
  };

  const handleClickForCancel = () => {
    // navigate("/user_address");
    if (location?.state?.from) {
      navigate(location?.state?.from);
    } else {
      navigate("/user_address");
    }
  };

  useEffect(() => {
    dispatch({ type: "SET_EMPTY_ADDRESS" });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="address-container" style={{ marginTop: "20px" }}>
      <h1 className="address-title">Add New Address</h1>
      <span className="address-error">
        {state.error.showError && state.error.error}
      </span>
      <form className="address-form">
        <input
          required
          placeholder="Enter Name"
          onChange={(e) => {
            dispatch({ type: "CREATE_ADDRESS", field: "ID", value: uuid() });
            dispatch({
              type: "CREATE_ADDRESS",
              field: "USER_NAME",
              value: e.target.value,
            });
          }}
        ></input>
        <input
          required
          placeholder="Enter House.no, Floor.no, Road, Colony"
          onChange={(e) =>
            dispatch({
              type: "CREATE_ADDRESS",
              field: "ADDRESS",
              value: e.target.value,
            })
          }
        ></input>
        <input
          required
          placeholder="Enter City"
          onChange={(e) =>
            dispatch({
              type: "CREATE_ADDRESS",
              field: "CITY",
              value: e.target.value,
            })
          }
        ></input>
        <input
          required
          placeholder="Enter State"
          onChange={(e) =>
            dispatch({
              type: "CREATE_ADDRESS",
              field: "STATE",
              value: e.target.value,
            })
          }
        ></input>
        <input
          required
          placeholder="Enter Country"
          onChange={(e) =>
            dispatch({
              type: "CREATE_ADDRESS",
              field: "COUNTRY",
              value: e.target.value,
            })
          }
        ></input>
        <input
          required
          placeholder="Enter Postal Code"
          onChange={(e) =>
            dispatch({
              type: "CREATE_ADDRESS",
              field: "POSTAL_CODE",
              value: e.target.value,
            })
          }
        ></input>
        <input
          required
          placeholder="Enter Mobile Number"
          onChange={(e) =>
            dispatch({
              type: "CREATE_ADDRESS",
              field: "PHONE_NO",
              value: e.target.value,
            })
          }
        ></input>
        <div className="address-btn">
          <button type="sumbit" onClick={(e) => handleClick(e)}>
            Add
          </button>{" "}
          <button onClick={handleClickForCancel}>Cancel</button>
          <button
            onClick={() => {
              dispatch({ type: "ADD_ADDRESS", data: dummyAddress });
              if (location?.state?.from) {
                navigate(location?.state?.from);
              } else {
                navigate("/user_address");
              }
            }}
          >
            Add Dummy Address
          </button>
        </div>
      </form>
    </div>
  );
}
