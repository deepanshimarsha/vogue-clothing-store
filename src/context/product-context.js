import { v4 as uuid } from "uuid";
import { formatDate } from "../backend//utils/authUtils";
import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../redux/reducer";

const ProductContext = createContext(null);

const ProductContextProvider = ({ children }) => {
  const testUser = {
    firstName: "Deepanshi",
    lastName: "Sharma",
    email: "deepanshisharma2510@gmail.com",
    password: "test",
  };
  //initial state
  const initialState = {
    products: [],
    filteredProducts: [],
    category: [],
    productDetail: [],
    cart: [],
    isLoggedIn: true,
    user: testUser,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  //product listing
  const getProductData = async () => {
    try {
      const res = await fetch("/api/products");
      const resJson = await res.json();
      dispatch({ type: "SET_PRODUCT", data: resJson.products });
    } catch (e) {
      console.error(e);
    }
  };

  //category listing
  const getCategoryData = async () => {
    try {
      const res = await fetch("/api/categories");
      const resJson = await res.json();
      dispatch({ type: "SET_CATEGORY", data: resJson.categories });
    } catch (e) {
      console.error(e);
    }
  };

  //product details
  const getProductDetail = async (productId) => {
    try {
      const res = await fetch(`/api/products/${productId}`);
      const resJson = await res.json();
      dispatch({ type: "SET_PRODUCT_DETAIL", data: resJson.product });
    } catch (e) {
      console.error(e);
    }
  };

  //Auth

  //Signup
  const signup = async () => {
    try {
      const { email, password, firstName, lastName } = state.user;
      const cred = {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
      };

      const res = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify(cred),
      });
      const { encodedToken } = await res.json();
      localStorage.setItem("token", encodedToken);
    } catch (e) {
      console.error(e);
    }
  };

  //Login
  const loginUser = async () => {
    try {
      const cred = state.user;
      const { email, password } = cred;
      const data = {
        email: email,
        password: password,
      };

      const res = await fetch("/api/auth/login", {
        method: "POST", // or 'PUT'
        body: JSON.stringify(data),
      });

      const { encodedToken } = await res.json();
      localStorage.setItem("token", encodedToken);
    } catch (e) {
      console.log(e);
    }
  };

  //on loading
  useEffect(() => {
    getProductData();
    getCategoryData();
    loginUser();
  }, []);

  return (
    <ProductContext.Provider
      value={{ state, dispatch, getProductDetail, loginUser, signup, testUser }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const useProductContext = () => useContext(ProductContext);

export { useProductContext, ProductContextProvider };
