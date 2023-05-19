import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { useProductContext } from "../context/product-context";
import { useEffect, useState } from "react";

export default function AddressForm() {
  const { state, dispatch, dummyAddress, emptyAddress } = useProductContext();
  console.log("1", state.newAddress);

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
    <div>
      <h1>Add New Address</h1>
      {warning}
      <form>
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
        <button type="sumbit" onClick={(e) => handleClick(e)}>
          Add
        </button>{" "}
        ||{" "}
        <NavLink
          to="/user_account"
          onClick={() => dispatch({ type: "ADD_ADDRESS", data: dummyAddress })}
        >
          Add Dummy Address
        </NavLink>
        <button>Cancel</button>
      </form>
    </div>
  );
}
