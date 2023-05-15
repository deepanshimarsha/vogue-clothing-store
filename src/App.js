import "./App.css";
import {Routes, Route} from "react-router-dom"
import Mockman from "mockman-js"
import Home from "./pages/Home";
import ProductList from "./pages/ProductLists";

function App() {
  return (
    <div className="App">

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<ProductList/>}/>
      <Route path="/mockman" element={<Mockman/>}/>
    </Routes>
    </div>
  );
}

export default App;
