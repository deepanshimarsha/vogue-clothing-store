import { useProductContext } from "../context/product-context";
import AddressCard from "./AddressCard";
import { NavLink, useLocation } from "react-router-dom";
import "../styles/checkout.css";

export default function SelectAddress() {
  const { state, dispatch } = useProductContext();
  const location = useLocation();
  //console.log(state.checkoutAddress);
  const handleClick = (id) => {
    const selectedAddress = state.address.filter((item) => item.id === id);
    dispatch({ type: "SET_CHECKOUT_ADDRESS", data: selectedAddress });
  };
  return (
    <div className="address-lists">
      <span className="order-heading">Select Checkout Address</span>

      {state.address.map((user_address) => {
        return (
          <div>
            <div className="checkout-address-card">
              <AddressCard {...user_address} />
              <button onClick={() => handleClick(user_address.id)}>Add</button>
            </div>
          </div>
        );
      })}
      <div className="add-address">
        <NavLink to="/address_form" state={{ from: location }}>
          Add New Address
        </NavLink>
      </div>
    </div>
  );
}
