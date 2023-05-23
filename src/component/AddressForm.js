import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { useProductContext } from "../context/product-context";
import { useEffect, useState } from "react";
import "../styles/address.css";

export default function AddressForm() {
  const { state, dispatch, dummyAddress, emptyAddress } = useProductContext();

  //console.log("1", state.newAddress);

  const [warning, setWarning] = useState("");
  const navigate = useNavigate();

  const handleClick = (e) => {
    dispatch({ type: "ADD_ADDRESS", data: state.newAddress });
    navigate("/user_account");
  };

  useEffect(() => {
    dispatch({ type: "SET_EMPTY_ADDRESS" });
  }, []);

  return (
    <div className="address-container" style={{ marginTop: "20px" }}>
      <h1 className="address-title">Add New Address</h1>
      {warning}
      <form className="address-form">
        <input
          required
          placeholder="Enter Name"
          onChange={(e) =>
            dispatch({
              type: "CREATE_ADDRESS",
              field: "USER_NAME",
              value: e.target.value,
            })
          }
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
          placeholder="CREATE_ADDRESS"
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
          <button>Cancel</button>
          <button
            onClick={() => {
              dispatch({ type: "ADD_ADDRESS", data: dummyAddress });
              navigate("/user_account");
            }}
          >
            Add Dummy Address
          </button>
        </div>
      </form>
    </div>
  );
}
