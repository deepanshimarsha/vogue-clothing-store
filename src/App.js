import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
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
import { useLocation, useNavigate } from "react-router-dom";
import EditAddressForm from "./pages/EditAddress";
import Orders from "./pages/Orders";

function App() {
  const { state, dispatch } = useProductContext();
  const location = useLocation();
  const navigate = useNavigate();
  console.log("cart", state.cart);
  const navLinkStyle = ({ isActive }) => {
    if (isActive) {
      return { color: "black", fontWeight: "bold" };
    } else {
      return { color: "black" };
    }
  };

  const totalProducts = state.cart.reduce((acc, curr) => acc + curr.qty, 0);

  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-main">
          {" "}
          <NavLink className="navbar-left heading" to="/" style={navLinkStyle}>
            <span>VOGUE</span>
          </NavLink>
          <input
            value={state.filters.searchInput}
            className="navbar-search"
            placeholder="Search"
            onChange={(e) => {
              dispatch({ type: "SET_SEARCH_INPUT", text: e.target.value });
              navigate("/products");
            }}
          ></input>
          <div className="navbar-right">
            {" "}
            <NavLink
              className="nav-link our-products"
              to="/products"
              style={navLinkStyle}
              // onClick={dispatch({ type: "CLEAR_FILTER", filter: "ALL_FILTER" })}
            >
              <i class="fa fa-th"></i>
            </NavLink>
            <NavLink className="nav-link" to="/wishlist" style={navLinkStyle}>
              <i class="fa fa-heart"></i>
              <div
                className="wishlist-notif-count"
                style={{ opacity: state.wishlist.length === 0 ? "0" : "1" }}
              >
                <span>
                  {state.wishlist.length === 0 ? "" : state.wishlist.length}
                </span>
              </div>
            </NavLink>
            <NavLink className="nav-link" to="/cart" style={navLinkStyle}>
              <i class="fa fa-shopping-cart"></i>
              <div
                className="wishlist-notif-count"
                style={{ opacity: state.cart.length === 0 ? "0" : "1" }}
              >
                <span>{state.cart.length === 0 ? "" : totalProducts}</span>
              </div>
            </NavLink>
            {state.isLoggedIn ? (
              <div className="dropdown-main">
                {" "}
                <div class="dropdown">
                  <button class="dropbtn">
                    <i class="fa fa-user" style={{ padding: "5px" }}></i>
                  </button>
                  <div class="dropdown-content">
                    <NavLink to="/user_account">
                      {" "}
                      {state.user.firstName}
                    </NavLink>
                    <NavLink to="/user_address">Address</NavLink>
                    <NavLink to="/orders">Orders</NavLink>
                    <NavLink
                      to="/"
                      onClick={() => {
                        dispatch({ type: "TOGGLE_IS_LOGGED_IN" });
                        localStorage.removeItem("loginToken");
                        dispatch({ type: "CLEAR_CART" });
                        dispatch({ type: "CLEAR_WISHLIST" });
                        dispatch({ type: "CLEAR_CHECKOUT_ADDRESS" });
                        dispatch({ type: "CLEAR_TEST_ADDRESS_ON_SIGNUP" });
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
                  className="navbar-login-btn"
                  to="/login"
                  state={{ from: location }}
                  style={navLinkStyle}
                >
                  <i class="fa fa-user" style={{ padding: "5px" }}></i>
                </NavLink>
              </button>
            )}
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
        <Route path="/orders" element={<Orders />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/edit" element={<EditAddressForm />} />
      </Routes>
    </div>
  );
}

export default App;
