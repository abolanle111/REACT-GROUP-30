import React from "react";

const ProductCard = ({ image, productName }) => {
  return (
    <div class="product-card">
      <div class="product-image">
        <img src={image} alt="" />
      </div>
      <div class="product-info">
        <h4>{productName}</h4>
        <button>Order Now</button>
      </div>
    </div>
  );
};

export default ProductCard;

