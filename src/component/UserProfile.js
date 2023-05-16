import { useProductContext } from "../context/product-context";
import LoginLogoutButton from "./LoginLogoutButton";

export default function UserProfile() {
  const { state } = useProductContext();
  const { email, firstName, lastName } = state.user;
  return (
    <div>
      <h1>Profile</h1>
      <p>Full Name : {firstName + " " + lastName}</p>
      <p>Email : {email} </p>
      <LoginLogoutButton />
    </div>
  );
}
