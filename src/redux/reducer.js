const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCT": {
      return { ...state, products: action.data, filteredProducts: action.data };
    }

    case "SET_CATEGORY": {
      return { ...state, category: action.data };
    }

    case "SET_PRODUCT_DETAIL": {
      return { ...state, productDetail: [action.data] };
    }
    case "SET_CART": {
      return { ...state, cart: action.data };
    }
    case "SET_WISHLIST": {
      return { ...state, wishlist: action.data };
    }

    case "TOGGLE_IS_LOGGED_IN": {
      return { ...state, isLoggedIn: !state.isLoggedIn };
    }

    case "SET_TEST_USER": {
      return { ...state, user: action.data };
    }
    case "SET_USER": {
      if (action.field === "FIRST_NAME") {
        return { ...state, user: { ...state.user, firstName: action.value } };
      }
      if (action.field === "LAST_NAME") {
        return { ...state, user: { ...state.user, lastName: action.value } };
      }
      if (action.field === "EMAIL") {
        return { ...state, user: { ...state.user, email: action.value } };
      }
      if (action.field === "PASSWORD") {
        return { ...state, user: { ...state.user, password: action.value } };
      }
    }
    default:
      throw new Error("Unknown action type");
  }
};
export { reducer };
