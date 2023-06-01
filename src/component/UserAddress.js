import { NavLink } from "react-router-dom";
import { useProductContext } from "../context/product-context";
import AddressCard from "./AddressCard";
import "../styles/address.css";
import { useNavigate } from "react-router-dom";

export default function UserAddress() {
  const { state, removeAddress, dispatch } = useProductContext();
  //console.log(state.address);

  const navigate = useNavigate();

  const handleEdit = (user_address) => {
    dispatch({ type: "SET_EDIT_ADDRESS", data: user_address });
    navigate("/edit");
  };
  return (
    <div className="address-container">
      <h1 className="address-title" s>
        My Addresses
      </h1>
      {state.address.map((user_address) => {
        return (
          <div className="address-content">
            <AddressCard {...user_address} />
            <div className="address-btn">
              <button onClick={() => handleEdit(user_address)}>Edit</button>
              <button
                onClick={() => {
                  console.log("addressId", user_address.id);
                  removeAddress(user_address.id);
                }}
              >
                Remove
              </button>
            </div>
          </div>
        );
      })}
      <div className="address-footer">
        <NavLink to="/address_form">+ Add New Address</NavLink>
      </div>
    </div>
  );
}
