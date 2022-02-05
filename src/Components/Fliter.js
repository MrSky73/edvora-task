import React from "react";
import { useProductsContext } from "../products_context";

const Filters = () => {
  const {
    allProducts,
    filteredProducts,
    productChanged,
    stateChanged,
    cityChanged,
  } = useProductsContext();
  const brands = [...new Set(allProducts.map((product) => product.brand_name))];

  const states = [
    ...new Set(allProducts.map((product) => product.address.state)),
  ];

  const cities = [
    ...new Set(allProducts.map((product) => product.address.city)),
  ];

  const onProductChange = (event) => {
    productChanged(event.target.value);
  };
  const onStateChange = (event) => {
    stateChanged(event.target.value);
  };
  const onCityChange = (event) => {
    cityChanged(event.target.value);
  };

  return (
    <div className="filters">
      <h3>Filters</h3>
      <hr />
      <div className="filter-group">
        <div className="filter">
          <select
            name="Products"
            className="company"
            onChange={(e) => {
              onProductChange(e);
            }}
          >
            <option value="default">Select Brand</option>
            {brands.map((brand, index) => {
              return (
                <option key={index} value={brand}>
                  {brand}
                </option>
              );
            })}
          </select>
        </div>
        <div className="filter">
          <select
            name="State"
            className="company"
            onChange={(e) => {
              onStateChange(e);
            }}
          >
            <option value="default">Select State</option>
            {states.map((state, index) => {
              return (
                <option key={index} value={state}>
                  {state}
                </option>
              );
            })}
          </select>
        </div>
        <div className="filter">
          <select
            name="Products"
            className="company"
            onChange={(e) => {
              onCityChange(e);
            }}
          >
            <option value="default">Select City</option>
            {cities.map((city, index) => {
              return (
                <option key={index} value={city}>
                  {city}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;
