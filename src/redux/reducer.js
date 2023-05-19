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

    case "SET_EMPTY_ADDRESS": {
      return { ...state, newAddress: {} };
    }
    case "CREATE_ADDRESS": {
      if (action.field === "USER_NAME") {
        return {
          ...state,
          newAddress: { ...state.newAddress, name: action.value },
        };
      }
      if (action.field === "ADDRESS") {
        return {
          ...state,
          newAddress: { ...state.newAddress, address: action.value },
        };
      }
      if (action.field === "CITY") {
        return {
          ...state,
          newAddress: { ...state.newAddress, city: action.value },
        };
      }
      if (action.field === "STATE") {
        return {
          ...state,
          newAddress: { ...state.newAddress, state: action.value },
        };
      }
      if (action.field === "COUNTRY") {
        return {
          ...state,
          newAddress: { ...state.newAddress, country: action.value },
        };
      }
      if (action.field === "POSTAL_CODE") {
        return {
          ...state,
          newAddress: { ...state.newAddress, postal_code: action.value },
        };
      }
      if (action.field === "PHONE_NO") {
        return {
          ...state,
          newAddress: { ...state.newAddress, phone_no: action.value },
        };
      }
    }

    case "ADD_ADDRESS": {
      return { ...state, address: [...state.address, action.data] };
    }

    case "REMOVE_ADDRESS": {
      return {
        ...state,
        address: state.address.filter(({ id }) => id !== action.addressId),
      };
    }
    default:
      throw new Error("Unknown action type");
  }
};
export { reducer };
