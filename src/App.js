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

function App() {
  const { getCart } = useProductContext();
  return (
    <div className="App">
      <nav>
        <NavLink to="/">Home</NavLink>||
        <NavLink to="/products">Our Products</NavLink>||
        <NavLink to="/wishlist">Wishlist</NavLink>||
        <NavLink to="/cart">Cart</NavLink>
        ||
        <NavLink to="/user_account">My Account</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/details/:productId" element={<ProductDetail />} />
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
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
