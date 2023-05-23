import "./App.css";
import {
  Routes,
  Route,
  NavLink,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Mockman from "mockman-js";

import Home from "./pages/Home";
import ProductList from "./pages/ProductLists";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
import UserAccount from "./pages/UserAccount";
import Signup from "./pages/Signup";
import RequiresAuth from "./component/RequiresAuth";
import Cart from "./pages/Cart";
import { useProductContext } from "./context/product-context";
import Wishlist from "./pages/Wishlist";
import AddressForm from "./component/AddressForm";
import Checkout from "./pages/Checkout";
import "./styles/home-page.css";
import UserAddress from "./component/UserAddress";
import { useLocation } from "react-router-dom";
import { formatDate } from "./backend/utils/authUtils";

function App() {
  const { getCart, state, dispatch } = useProductContext();
  const location = useLocation();
  const navigate = useNavigate();

  const navLinkStyle = ({ isActive }) => {
    if (isActive) {
      return { color: "black", fontWeight: "bold" };
    } else {
      return { color: "black" };
    }
  };
  const handleLogin = () => {};
  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-main">
          {" "}
          <NavLink className="navbar-left heading" to="/" style={navLinkStyle}>
            <span>E-Mart</span>
          </NavLink>
          <input
            className="navbar-search"
            placeholder="Search"
            onChange={(e) =>
              dispatch({ type: "SET_SEARCH_INPUT", text: e.target.value })
            }
          ></input>
          <div className="navbar-right">
            {" "}
            <NavLink className="nav-link" to="/products" style={navLinkStyle}>
              Our Products
            </NavLink>
            <NavLink className="nav-link" to="/wishlist" style={navLinkStyle}>
              Wishlist
            </NavLink>
            <NavLink className="nav-link" to="/cart" style={navLinkStyle}>
              Cart
            </NavLink>
            {state.isLoggedIn ? (
              <div className="dropdown-main">
                {" "}
                <div class="dropdown">
                  <button class="dropbtn">
                    <i
                      class="fas fa-user-circle"
                      style={{ fontSize: "20px", padding: "5px" }}
                    ></i>
                    {state.user.firstName}
                  </button>
                  <div class="dropdown-content">
                    <NavLink to="/user_account">Profile</NavLink>
                    <NavLink to="/user_address">Address</NavLink>
                    <NavLink
                      to="/"
                      onClick={() => {
                        dispatch({ type: "TOGGLE_IS_LOGGED_IN" });
                        localStorage.removeItem("loginToken");
                      }}
                    >
                      Logout
                    </NavLink>
                  </div>
                </div>
              </div>
            ) : (
              <button className="dropbtn">
                <NavLink
                  className="nav-link"
                  to="/login"
                  state={{ from: location }}
                >
                  Login
                </NavLink>
              </button>
            )}
            {/* <NavLink className="nav-link" to="/user_account">
              My Account
            </NavLink> */}
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/details/:productId" element={<ProductDetail />} />
        <Route path="/address_form" element={<AddressForm />} />
        <Route
          path="/user_account"
          element={
            <RequiresAuth>
              <UserAccount />
            </RequiresAuth>
          }
        />
        <Route
          path="/user_address"
          element={
            <RequiresAuth>
              <UserAddress />
            </RequiresAuth>
          }
        />
        <Route
          path="/cart"
          element={
            <RequiresAuth>
              <Cart />
            </RequiresAuth>
          }
        />
        <Route
          path="/wishlist"
          element={
            <RequiresAuth>
              <Wishlist />
            </RequiresAuth>
          }
        />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
