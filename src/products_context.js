import React, { useContext, useReducer, useEffect } from "react";
import axios from "axios";
import reducer from "./product_reducer";

const initialState = {
  allProducts: [],
  filteredProducts: [],
  currentBrand: "default",
  currentState: "default",
  currentCity: "default",
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchProducts = async (url) => {
    try {
      const response = await axios.get(url);
      const products = response.data;
      dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: products });
    } catch (error) {
      console.log(error);
    }
  };

  const productChanged = (brand) => {
    dispatch({ type: "PRODUCTS_CHANGED", payload: brand });
  };

  const stateChanged = (state) => {
    dispatch({ type: "STATE_CHANGED", payload: state });
  };

  const cityChanged = (city) => {
    dispatch({ type: "CITY_CHANGED", payload: city });
  };

  useEffect(() => {
    fetchProducts("https://assessment-edvora.herokuapp.com/");
  }, []);

  return (
    <ProductsContext.Provider
      value={{ ...state, productChanged, stateChanged, cityChanged }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
