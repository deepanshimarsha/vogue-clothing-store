import { NavLink } from "react-router-dom";
import { useProductContext } from "../context/product-context";
import AddressCard from "./AddressCard";
export default function UserAddress() {
  const { state, removeAddress } = useProductContext();
  console.log(state.address);
  return (
    <div>
      <h1>My Addresses</h1>
      {state.address.map((user_address) => {
        return (
          <div>
            <AddressCard {...user_address} />
            <button>Edit</button>
            <button onClick={() => removeAddress(user_address.id)}>
              Remove
            </button>
            ;
          </div>
        );
      })}
      <NavLink to="/address_form">Add New Address</NavLink>
    </div>
  );
}
