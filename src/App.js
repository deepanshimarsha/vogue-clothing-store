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

function App() {
  const { getCart } = useProductContext();
  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-main">
          {" "}
          <NavLink className="navbar-left heading" to="/">
            <span>E-Mart</span>
          </NavLink>
          <input className="navbar-search" placeholder="Search"></input>
          <div className="navbar-right">
            {" "}
            <NavLink className="nav-link" to="/products">
              Our Products
            </NavLink>
            <NavLink className="nav-link" to="/wishlist">
              Wishlist
            </NavLink>
            <NavLink className="nav-link" to="/cart">
              Cart
            </NavLink>
            <div className="dropdown-main">
              {" "}
              <div class="dropdown">
                <button class="dropbtn">Dropdown</button>
                <div class="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
            </div>
            <select>
              <option>
                <button>
                  <NavLink to="/user_account">Profile</NavLink>
                </button>
              </option>
              <option>
                <NavLink to="/user_address">Address</NavLink>
              </option>
              <option>Logout</option>
            </select>
            <NavLink className="nav-link" to="/user_account">
              My Account
            </NavLink>
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
