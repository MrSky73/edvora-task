import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Card from "./Card";
import { useProductsContext } from "../products_context";

const Carousel = ({ brand }) => {
  const { filteredProducts } = useProductsContext();

  const requiredproducts = filteredProducts.filter(
    (product) => product.brand_name === brand
  );

  return (
    <>
      <h4>{brand}</h4>
      <hr />
      {requiredproducts.length === 0 && (
        <p>
          "No products of desired specifactions are available please try
          something else."
        </p>
      )}
      <Swiper
        modules={[Pagination, Navigation]}
        slidesPerView={3}
        spaceBetween={30}
        //   pagination={{
        //     clickable: true,
        //   }}
        navigation
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1000: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        {requiredproducts.map((product, index) => {
          const {
            product_name,
            brand_name,
            price,
            date,
            address,
            discription,
            image,
          } = product;
          return (
            <SwiperSlide key={index}>
              <Card
                key={index}
                productName={product_name}
                brandName={brand_name}
                price={price}
                date={date.substring(0, 9)}
                address={address}
                discription={discription}
                image={image}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Carousel;
