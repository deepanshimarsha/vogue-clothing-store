import "./App.css";
import {Routes, Route, NavLink} from "react-router-dom"
import Mockman from "mockman-js"


import Home from "./pages/Home";
import ProductList from "./pages/ProductLists";

function App() {
  return (
    <div className="App">
    <nav>
      <NavLink to = "/">Home</NavLink>|| 
      <NavLink to = "/products">Our Products</NavLink>|| 
      <NavLink to = "/wishlist">Wishlist</NavLink>|| 
      <NavLink to= "/cart">Cart</NavLink>|| 
      <NavLink to ="/user_account">My Account</NavLink>
    </nav>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<ProductList/>}/>
      <Route path="/mockman" element={<Mockman/>}/>
    </Routes>
    </div>
  );
}

export default App;
