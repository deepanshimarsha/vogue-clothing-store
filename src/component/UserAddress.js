import { NavLink } from "react-router-dom";
import { useProductContext } from "../context/product-context";
export default function UserAddress() {
  const { state, removeAddress } = useProductContext();
  console.log(state.address);
  return (
    <div>
      <h1>My Addresses</h1>
      {state.address.map(
        ({
          id,
          name,
          address,
          city,
          state,
          country,
          postal_code,
          phone_no,
        }) => {
          return (
            <div>
              <h3>{name}</h3>
              <p>
                {address}, {city}, {state},{country}
              </p>
              <p>{postal_code}</p>
              <p>{phone_no}</p>
              <button>Edit</button>
              <button onClick={() => removeAddress(id)}>Remove</button>
            </div>
          );
        }
      )}
      <NavLink to="/address_form">Add New Address</NavLink>
    </div>
  );
}
