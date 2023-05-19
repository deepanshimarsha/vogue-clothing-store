import { useEffect, useState } from "react";
import { useProductContext } from "../context/product-context";
import AddressCard from "./AddressCard";
import { NavLink } from "react-router-dom";

export default function SelectAddress() {
  const { state, dispatch } = useProductContext();
  console.log(state.checkoutAddress);

  return (
    <div>
      {state.address.map((user_address) => {
        return (
          <div>
            <input
              type="radio"
              name="checkout-address"
              value={JSON.stringify(user_address)}
              onChange={(e) => {
                dispatch({
                  type: "SET_CHECKOUT_ADDRESS",
                  data: e.target.value,
                });
              }}
            ></input>
            <label>
              <AddressCard {...user_address} />
            </label>
          </div>
        );
      })}

      <NavLink to="/address_form">Add New Address</NavLink>
    </div>
  );
}
