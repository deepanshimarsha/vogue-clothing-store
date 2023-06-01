import { useNavigate } from "react-router-dom";
import { useProductContext } from "../context/product-context";
import { useEffect } from "react";
import "../styles/address.css";

export default function EditAddressForm(userAddress) {
  const { state, dispatch } = useProductContext();

  const navigate = useNavigate();

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
      dispatch({ type: "EDIT_ADDRESS", data: state.newAddress });
      dispatch({ type: "SET_EMPTY_ADDRESS" });
      navigate("/user_address");
    }
  };

  return (
    <div className="address-container" style={{ marginTop: "20px" }}>
      <h1 className="address-title">Add New Address</h1>
      <span className="address-error">
        {state.error.showError && state.error.error}
      </span>
      <form className="address-form">
        <input
          required
          value={state.newAddress.name}
          placeholder="Enter Name"
          onChange={(e) => {
            dispatch({
              type: "CREATE_ADDRESS",
              field: "ID",
              value: state.newAddress.id,
            });
            dispatch({
              type: "CREATE_ADDRESS",
              field: "USER_NAME",
              value: e.target.value,
            });
          }}
        ></input>
        <input
          required
          value={state.newAddress.address}
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
          value={state.newAddress.city}
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
          value={state.newAddress.state}
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
          value={state.newAddress.country}
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
          value={state.newAddress.postal_code}
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
          value={state.newAddress.phone_no}
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
            save
          </button>{" "}
        </div>
      </form>
    </div>
  );
}
