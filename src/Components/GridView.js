import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Carousel from "./Swiper";
import { useProductsContext } from "../products_context";

const GridView = () => {
  const { filteredProducts } = useProductsContext();
  const brands = [
    ...new Set(filteredProducts.map((product) => product.brand_name)),
  ];
  return (
    <div className="grid-view">
      <h2>Edvora</h2>
      <h3>Products</h3>
      {brands.length === 0 && (
        <p style={{ color: "white" }}>
          "No products of desired specifactions are available please try
          something else."
        </p>
      )}
      {brands.map((brand, index) => (
        <Carousel key={index} brand={brand} />
      ))}
    </div>
  );
};

export default GridView;
