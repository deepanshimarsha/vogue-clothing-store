import { v4 as uuid } from "uuid";
import { formatDate } from "../backend//utils/authUtils";
import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../redux/reducer";
import { useNavigate } from "react-router-dom";

const ProductContext = createContext(null);

const ProductContextProvider = ({ children }) => {
  const testUser = {
    firstName: "Deepanshi",
    lastName: "Sharma",
    email: "deepanshisharma2510@gmail.com",
    password: "test",
  };

  const testAddress = {
    id: "default",
    name: "Deepanshi Sharma",
    address: "103B, 1st floor, Akansha Residency, Narsingh Nagar, Ranjhi",
    city: "Jabalpur",
    state: "Madhya Pradesh",
    country: "India",
    postal_code: "482005",
    phone_no: +917649942366,
  };

  const dummyAddress = {
    id: "test",
    name: "Admin",
    address: "33 , MG Road",
    city: "Maharashtra",
    state: "Pune",
    country: "India",
    postal_code: "411046",
    phone_no: 1234567891,
  };

  const emptyAddress = {
    id: "",
    name: "",
    address: "",
    city: "",
    state: "",
    country: "",
    postal_code: "",
    phone_no: "",
  };

  //initial state

  const token = localStorage.getItem("loginToken");
  const initialState = {
    isLoading: true,
    error: { showError: false, error: "" },
    products: [],
    filteredProducts: [],
    category: [],
    productDetail: [],
    cart: [],
    wishlist: [],
    address: [testAddress],
    newAddress: {},
    checkoutAddress: testAddress,
    isLoggedIn: token ? true : false,
    user: testUser,
    filters: {
      showDresses: false,
      showTops: false,
      showBottoms: false,
      sortBy: "",
      priceRange: "",
      searchInput: "",
    },
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  //console.log("3", state.filteredProducts);

  // useEffect(() => {
  //   dispatch({ type: "SORT_PRODUCTS" });
  // }, [state.filters.sortBy]);

  // useEffect(() => {
  //   dispatch({ type: "FILTER_PRODUCTS_BY_PRICE" });
  // }, [state.filters.priceRange]);

  //product listing
  const getProductData = async () => {
    dispatch({ type: "SET_IS_LOADING", value: "TRUE" });
    try {
      const res = await fetch("/api/products");
      const resJson = await res.json();
      dispatch({ type: "SET_PRODUCT", data: resJson.products });
    } catch (e) {
      console.error(e);
    } finally {
      dispatch({ type: "SET_IS_LOADING", value: "FALSE" });
    }
  };

  //category listing
  const getCategoryData = async () => {
    dispatch({ type: "SET_IS_LOADING", value: "TRUE" });
    try {
      const res = await fetch("/api/categories");
      const resJson = await res.json();
      dispatch({ type: "SET_CATEGORY", data: resJson.categories });
    } catch (e) {
      console.error(e);
    } finally {
      dispatch({ type: "SET_IS_LOADING", value: "FALSE" });
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

  //User Address

  const removeAddress = (addressId) => {
    dispatch({ type: "REMOVE_ADDRESS", addressId: addressId });
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
      localStorage.setItem("loginToken", encodedToken);
      dispatch({ type: "CLEAR_TEST_ADDRESS_ON_SIGNUP" });
      getCart();
      getWishlist();
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
      localStorage.setItem("loginToken", encodedToken);

      getCart();
      getWishlist();
    } catch (e) {
      console.log(e);
    }
  };

  //cart

  //fetching user cart

  const getCart = async () => {
    try {
      const encodedToken = localStorage.getItem("loginToken");

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
      const encodedToken = localStorage.getItem("loginToken");

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
      const encodedToken = localStorage.getItem("loginToken");
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
      const encodedToken = localStorage.getItem("loginToken");
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
      const encodedToken = localStorage.getItem("loginToken");
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
      const encodedToken = localStorage.getItem("loginToken");

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

  //add to wishlist

  const addToWishlist = async (item) => {
    try {
      const encodedToken = localStorage.getItem("loginToken");

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

  //remove from wishlist

  const removeFromWishlist = async (itemId) => {
    try {
      const encodedToken = localStorage.getItem("loginToken");
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

  //find product in cart

  const findInCart = (itemId) => {
    //console.log(state.cart);
    if (state.cart.length != 0) {
      return state.cart.findIndex(({ _id }) => _id === itemId);
    } else {
      return -1;
    }
  };

  //find product in wishlist

  const findInWishlist = (itemId) =>
    state.wishlist.findIndex(({ _id }) => _id === itemId);

  //on loading

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
  }, [
    state.filters.showDresses,
    state.filters.showTops,
    state.filters.showBottoms,
    state.filters.sortBy,
    state.filters.priceRange,
    state.filters.searchInput,
  ]);

  useEffect(() => {
    // getCategoryData();
    // getProductData();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        state,
        dispatch,
        getProductData,
        getCategoryData,
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
        findInCart,
        findInWishlist,
        removeAddress,
        dummyAddress,
        emptyAddress,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const useProductContext = () => useContext(ProductContext);

export { useProductContext, ProductContextProvider };
