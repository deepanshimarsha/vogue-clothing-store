import { useProductContext } from "../context/product-context";
import LoginLogoutButton from "./LoginLogoutButton";
import "../styles/profile.css";

export default function UserProfile() {
  const { state } = useProductContext();
  const { email, firstName, lastName } = state.user;
  return (
    <div className="profile-container">
      <h1 className="profile-title" style={{ color: "#5A5A5A" }}>
        My Profile
      </h1>
      <div className="profile-description">
        <p>
          <span>
            <b>Name</b>
          </span>{" "}
          <span>{firstName + " " + lastName}</span>
        </p>
        <p>
          <span>
            <b>Email </b>
          </span>{" "}
          <span>{email}</span>{" "}
        </p>
      </div>
      <div className="profile-btn">
        <LoginLogoutButton />
      </div>
    </div>
  );
}
