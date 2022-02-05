const products_reducer = (state, action) => {
  if (action.type === "GET_PRODUCTS_SUCCESS") {
    return {
      ...state,
      allProducts: action.payload,
      filteredProducts: action.payload,
    };
  }
  if (action.type === "PRODUCTS_CHANGED") {
    let tempProducts;
    action.payload === "default"
      ? (tempProducts = state.allProducts)
      : (tempProducts = state.allProducts.filter(
          (product) => product.brand_name === action.payload
        ));

    state.currentState !== "default"
      ? (tempProducts = tempProducts.filter(
          (product) => product.address.state === state.currentState
        ))
      : (tempProducts = tempProducts);
    state.currentCity !== "default"
      ? (tempProducts = tempProducts.filter(
          (product) => product.address.city === state.currentCity
        ))
      : (tempProducts = tempProducts);
    return {
      ...state,
      filteredProducts: tempProducts,
      currentBrand: action.payload,
    };
  }
  if (action.type === "STATE_CHANGED") {
    let tempProducts;
    action.payload === "default"
      ? (tempProducts = state.allProducts)
      : (tempProducts = state.allProducts.filter(
          (product) => product.address.state === action.payload
        ));

    state.currentBrand !== "default"
      ? (tempProducts = tempProducts.filter(
          (product) => product.brand_name === state.currentBrand
        ))
      : (tempProducts = tempProducts);
    state.currentCity !== "default"
      ? (tempProducts = tempProducts.filter(
          (product) => product.address.city === state.currentCity
        ))
      : (tempProducts = tempProducts);
    return {
      ...state,
      filteredProducts: tempProducts,
      currentState: action.payload,
    };
  }
  if (action.type === "CITY_CHANGED") {
    let tempProducts;
    action.payload === "default"
      ? (tempProducts = state.allProducts)
      : (tempProducts = state.allProducts.filter(
          (product) => product.address.city === action.payload
        ));

    state.currentBrand !== "default"
      ? (tempProducts = tempProducts.filter(
          (product) => product.brand_name === state.currentBrand
        ))
      : (tempProducts = tempProducts);
    state.currentState !== "default"
      ? (tempProducts = tempProducts.filter(
          (product) => product.address.state === state.currentState
        ))
      : (tempProducts = tempProducts);
    return {
      ...state,
      filteredProducts: tempProducts,
      currentCity: action.payload,
    };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default products_reducer;
