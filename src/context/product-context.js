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
    wishlist: [],
    isLoggedIn: false,
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

  //cart

  //fetching user cart

  const getCart = async () => {
    try {
      const encodedToken = localStorage.getItem("token");

      const res = await fetch("/api/user/cart", {
        method: "GET",
        headers: {
          authorization: encodedToken,
        },
      });

      const jsonData = await res.json();

      dispatch({ type: "SET_CART", data: jsonData.cart });
    } catch (e) {
      console.error(e);
    }
  };

  //add to cart

  const addToCart = async (item) => {
    try {
      const encodedToken = localStorage.getItem("token");

      const res = await fetch("/api/user/cart", {
        method: "POST",
        headers: {
          authorization: encodedToken,
        },
        body: JSON.stringify({ product: item }),
      });
      const jsonData = await res.json();

      dispatch({ type: "SET_CART", data: jsonData.cart });
    } catch (e) {
      console.error(e);
    }
  };

  //remove from cart

  const removeFromCart = async (itemId) => {
    try {
      const encodedToken = localStorage.getItem("token");
      const res = await fetch(`/api/user/cart/${itemId}`, {
        method: "DELETE",
        headers: {
          authorization: encodedToken,
        },
      });
      const jsonData = await res.json();

      dispatch({ type: "SET_CART", data: jsonData.cart });
    } catch (e) {
      console.error(e);
    }
  };

  //update qty of products in cart

  const incrementProductQty = async (itemId) => {
    try {
      const encodedToken = localStorage.getItem("token");
      const res = await fetch(`/api/user/cart/${itemId}`, {
        method: "POST",
        headers: {
          authorization: encodedToken,
        },
        body: JSON.stringify({ action: { type: "increment" } }),
      });

      const jsonData = await res.json();

      dispatch({ type: "SET_CART", data: jsonData.cart });
    } catch (e) {
      console.error(e);
    }
  };

  const decremnetProductQty = async (itemId) => {
    try {
      const encodedToken = localStorage.getItem("token");
      const res = await fetch(`/api/user/cart/${itemId}`, {
        method: "POST",
        headers: {
          authorization: encodedToken,
        },
        body: JSON.stringify({ action: { type: "decrement" } }),
      });

      const jsonData = await res.json();

      dispatch({ type: "SET_CART", data: jsonData.cart });
    } catch (e) {
      console.error(e);
    }
  };

  //wishlist

  //fetching user wishlist

  const getWishlist = async () => {
    try {
      const encodedToken = localStorage.getItem("token");

      const res = await fetch("/api/user/wishlist", {
        method: "GET",
        headers: {
          authorization: encodedToken,
        },
      });

      const jsonData = await res.json();
      console.log(jsonData);
      dispatch({ type: "SET_WISHLIST", data: jsonData.wishlist });
    } catch (e) {
      console.error(e);
    }
  };

  //add to cart

  const addToWishlist = async (item) => {
    try {
      const encodedToken = localStorage.getItem("token");

      const res = await fetch("/api/user/wishlist", {
        method: "POST",
        headers: {
          authorization: encodedToken,
        },
        body: JSON.stringify({ product: item }),
      });
      const jsonData = await res.json();

      dispatch({ type: "SET_WISHLIST", data: jsonData.wishlist });
    } catch (e) {
      console.error(e);
    }
  };

  //remove from cart

  const removeFromWishlist = async (itemId) => {
    try {
      const encodedToken = localStorage.getItem("token");
      const res = await fetch(`/api/user/wishlist/${itemId}`, {
        method: "DELETE",
        headers: {
          authorization: encodedToken,
        },
      });
      const jsonData = await res.json();

      dispatch({ type: "SET_WISHLIST", data: jsonData.wishlist });
    } catch (e) {
      console.error(e);
    }
  };
  //on loading
  useEffect(() => {
    getProductData();
    getCategoryData();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        state,
        dispatch,
        getProductDetail,
        loginUser,
        signup,
        testUser,
        getCart,
        addToCart,
        removeFromCart,
        incrementProductQty,
        decremnetProductQty,
        addToWishlist,
        getWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const useProductContext = () => useContext(ProductContext);

export { useProductContext, ProductContextProvider };
