import React from "react";
import "./Products.css";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <section className="product-wrapper">
      {/* header section start */}
      <header className="product-header">
        <h1>Our Products</h1>
      </header>
      {/* headersection end */}

      {/* product layout  start*/}
      <div>
        <h3>Our Exclusive Intercontinental dish</h3>
        <section className="products">
          <ProductCard image="./Images/img1.jpg" productName="Chicken Shawarma" />
          <ProductCard image="./Images/img2.jpg" productName="Stuffed Lobster" />
          <ProductCard image="./Images/img3.jpg" productName="Burger" />
        </section>

        <h3>Our Exclusive Local dish</h3>
        <section className="products">
          <ProductCard image="./Images/img4.jpg" productName="Steamed beans" />
          <ProductCard image="./Images/img5.jpg" productName="Pounded Yam" />
          <ProductCard image="./Images/img6.jpg" productName="Egusi Soup" />
        </section>
        <h3>Our Exclusive deserts</h3>
        <section className="products">
          <ProductCard image="./Images/img7.jpg" productName="Thin Mint Cookies" />
          <ProductCard image="./Images/img8.jpg" productName="Chocolate Molten Cakes" />
          <ProductCard image="./Images/img9.jpg" productName="Mocha Brownie Ice Cream Cake" />
        </section>
      </div>
      {/* Product layout ends */}
    </section>
  );
};

export default Products;

