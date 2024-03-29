/*eslint no-fallthrough: "error"*/
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_IS_LOADING":
      if (action.value === "FALSE") {
        return { ...state, isLoading: false };
      } else {
        return { ...state, isLoading: true };
      }

    case "SET_ERROR": {
      if (action.error === "") {
        return { ...state, error: { showError: false, error: "" } };
      } else {
        return {
          ...state,
          error: { showError: true, error: action.error },
        };
      }
    }

    case "TOGGLE_SHOW_PASSWORD": {
      return { ...state, showPassword: !state.showPassword };
    }
    case "SET_PRODUCT": {
      return { ...state, products: action.data, filteredProducts: action.data };
    }

    case "SET_CATEGORY": {
      return { ...state, category: action.data };
    }

    case "SET_PRICE_RANGE": {
      return {
        ...state,
        filters: { ...state.filters, priceRange: action.value },
      };
    }

    case "SET_SEARCH_INPUT": {
      return {
        ...state,
        filters: { ...state.filters, searchInput: action.text },
      };
    }

    //filter through home page
    case "SET_SHOW_DRESSES": {
      return {
        ...state,
        filters: {
          ...state.filters,
          showDresses: true,
          showBottoms: false,
          showTops: false,
        },
      };
    }
    case "SET_SHOW_TOPS": {
      return {
        ...state,
        filters: {
          ...state.filters,
          showTops: true,
          showBottoms: false,
          showDresses: false,
        },
      };
    }
    case "SET_SHOW_BOTTOMS": {
      return {
        ...state,
        filters: {
          ...state.filters,
          showBottoms: true,
          showTops: false,
          showDresses: false,
        },
      };
    }
    case "TOGGLE_SHOW_DRESSES": {
      return {
        ...state,
        filters: { ...state.filters, showDresses: !state.filters.showDresses },
      };
    }
    case "TOGGLE_SHOW_TOPS": {
      return {
        ...state,
        filters: { ...state.filters, showTops: !state.filters.showTops },
      };
    }
    case "TOGGLE_SHOW_BOTTOMS": {
      return {
        ...state,
        filters: { ...state.filters, showBottoms: !state.filters.showBottoms },
      };
    }

    case "SET_SORT_BY": {
      return {
        ...state,
        filters: { ...state.filters, sortBy: action.option },
      };
    }

    case "FILTER_PRODUCTS": {
      let newFilteredProducts = state.products.slice();
      let categories = [];
      //search input
      newFilteredProducts = newFilteredProducts.filter(({ title }) =>
        title.toLowerCase().includes(state.filters.searchInput.toLowerCase())
      );

      if (state.filters.showDresses) {
        categories.push("dresses");
      }

      if (state.filters.showTops) {
        categories.push("tops");
      }

      if (state.filters.showBottoms) {
        categories.push("bottoms");
      }

      if (state.filters.sortBy === "ASC") {
        newFilteredProducts = [...newFilteredProducts].sort(
          (a, b) => a.price - b.price
        );
      }

      if (state.filters.sortBy === "DESC") {
        newFilteredProducts = [...newFilteredProducts].sort(
          (a, b) => b.price - a.price
        );
      }

      if (state.filters.sortBy === "RATING") {
        newFilteredProducts = [...newFilteredProducts].sort(
          (a, b) => b.rating - a.rating
        );
      }

      if (state.filters.priceRange !== "") {
        newFilteredProducts = newFilteredProducts.filter(
          ({ rating }) => Number(rating) === Number(state.filters.priceRange)
        );
      }
      console.log("categories", categories);
      newFilteredProducts = newFilteredProducts.filter(({ categoryName }) => {
        if (categories.length === 0) {
          return true;
        } else {
          return categories.includes(categoryName);
        }
      });
      console.log(state);
      return {
        ...state,
        filteredProducts: newFilteredProducts,
      };
    }

    case "CLEAR_FILTER": {
      if (action.filter === "ALL_FILTER") {
        return {
          ...state,
          filters: {
            showDresses: false,
            showTops: false,
            showBottoms: false,
            sortBy: "",
            priceRange: "",
            searchInput: "",
          },
        };
      }
    }

    // eslint-disable-next-line
    case "SET_PRODUCT_DETAIL": {
      return { ...state, productDetail: [action.data] };
    }
    case "SET_CART": {
      return { ...state, cart: action.data };
    }

    case "CLEAR_CART": {
      return { ...state, cart: [] };
    }
    case "SET_WISHLIST": {
      return { ...state, wishlist: action.data };
    }
    case "CLEAR_WISHLIST": {
      return { ...state, wishlist: [] };
    }

    case "SET_ORDERS": {
      return { ...state, orders: [...state.orders, action.order] };
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

    // eslint-disable-next-line
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
      if (action.field === "ID") {
        return {
          ...state,
          newAddress: { ...state.newAddress, id: action.value },
        };
      }
    }

    // eslint-disable-next-line
    case "CLEAR_TEST_ADDRESS_ON_SIGNUP": {
      return { ...state, address: [] };
    }
    case "SET_TEST_ADDRESS": {
      return {
        ...state,
        address: [
          {
            id: "default",
            name: "Anjana Sodhani",
            address:
              "Opp Nehru Nagar BRTS Stop, Nehru Nagar Char Rasta , Satellite Road, Ambavadi",
            city: "Ahmedabad",
            state: "Gujarat",
            country: "India",
            postal_code: "268009",
            phone_no: +917926307991,
          },
        ],
      };
    }
    case "ADD_ADDRESS": {
      return { ...state, address: [...state.address, action.data] };
    }

    case "EDIT_ADDRESS": {
      return {
        ...state,
        address: state.address.map((userAddress) => {
          if (userAddress.id === action.data.id) {
            userAddress = action.data;
          }
          return userAddress;
        }),
      };
    }
    case "SET_EDIT_ADDRESS": {
      return {
        ...state,
        newAddress: action.data,
      };
    }

    case "REMOVE_ADDRESS": {
      console.log("reducer", action.addressId);
      return {
        ...state,
        address: state.address.filter(({ id }) => id !== action.addressId),
      };
    }

    case "SET_CHECKOUT_ADDRESS": {
      return { ...state, checkoutAddress: action.data };
    }
    case "CLEAR_CHECKOUT_ADDRESS": {
      return { ...state, checkoutAddress: {} };
    }

    default:
      throw new Error("Unknown action type");
  }
};
export { reducer };
