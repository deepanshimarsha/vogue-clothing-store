import { Navigate, useLocation } from "react-router-dom";
import { useProductContext } from "../context/product-context";

export default function RequiresAuth({ children }) {
  const { state } = useProductContext();
  const location = useLocation();

  return state.isLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
}
