import React from "react";

const Card = ({
  productName,
  brandName,
  price,
  address,
  discription,
  image,
  date,
}) => {
  return (
    <div className="card">
      <div className="top-Card">
        <img alt="image" src={image} />
        <div className="info">
          <h2>{productName}</h2>
          <p>{brandName}</p>
          <h3> $ {price}</h3>
        </div>
      </div>
      <div className="card-bottom">
        <span>
          {address.state}, {address.city}
        </span>
        <span>{date}</span>
        <p>{discription}</p>
      </div>
    </div>
  );
};

export default Card;
