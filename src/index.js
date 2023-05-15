import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router} from "react-router-dom";


import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { ProductContextProvider } from "./context/product-context";


// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>

      <ProductContextProvider>
        <App />
      </ProductContextProvider>
      
    </Router>
   
  </React.StrictMode>,
  document.getElementById("root")
);
