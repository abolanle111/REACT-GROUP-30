import React from 'react';
import './Products.css';

const Products = (shoot) => {
  return (
    <div className='body'>

      {/* header section start */}
      <header>
        
          <h1>Our Products</h1>
          </header>
          {/* headersection end */}

          {/* product layout  start*/}
          <div>
          <h3>Our Exclusive Intercontinental dish</h3>
      <section>
          <div class="product-card">
                      <div class="product-image">
                          <img src="./Images/img 1.jpg" alt='first'/>
                            </div>
                            <div class="product-info">
                            <h4>Chicken Shawarma </h4>
                            <button onClick={shoot}>Order Now</button>
                           
                            </div>
                      </div>
                        <div class="product-card">
                            <div class="product-image">
                          <img src="./Images/img2.jpg" alt='first'/>
                            </div>
                            <div class="product-info">
                            <h4>Stuffed Lobster</h4>
                            <button onClick={shoot}>Order Now</button>
                           
                            </div>
                        </div>
                        <div class="product-card">
                            <div class="product-image">
                          <img src="./Images/img3.jpg" alt='first'/>
                            </div>
                            <div class="product-info">
                            <h4>Burger</h4>
                            <button onClick={shoot}>Order Now</button>
                           
                            </div>
           </div>            
      </section>
      
      <h3>Our Exclusive Local dish</h3>
                <section>
                            <div class="product-card">
                                  <div class="product-image">
                                      <img src="./Images/img4.jpg" alt='first'/>
                                        </div>
                                        <div class="product-info">
                                        <h4>Steamed beans pudding</h4>
                                        <button onClick={shoot}>Order Now</button>
                                      
                                        </div>
                                  </div>
                                    <div class="product-card">
                                        <div class="product-image">
                                      <img src="./Images/img5.jpg" alt='first'/>
                                        </div>
                                        <div class="product-info">
                                        <h4>Pounded Yam</h4>
                                        <button onClick={shoot}>Order Now</button>
                                      
                                        </div>
                                    </div>
                                    <div class="product-card">
                                        <div class="product-image">
                                      <img src="./Images/img6.jpg" alt='first'/>
                                        </div>
                                        <div class="product-info">
                                        <h4>Egusi Soup</h4>
                                        <button onClick={shoot}>Order Now</button>
                                      
                                        </div>
                                  </div>      
                </section>
                <h3>Our Exclusive deserts</h3>
                <section>
                <div class="product-card">
                                  <div class="product-image">
                                      <img src="./Images/img7.jpg" alt='first'/>
                                        </div>
                                        <div class="product-info">
                                        <h4>Thin Mint Cookies</h4>
                                        <button onClick={shoot}>Order Now</button>
                                      
                                        </div>
                                  </div>
                                    <div class="product-card">
                                        <div class="product-image">
                                      <img src="./Images/img8.jpg" alt='first'/>
                                        </div>
                                        <div class="product-info">
                                        <h4>Chocolate Molten Cakes</h4>
                                        <button onClick={shoot}>Order Now</button>
                                      
                                        </div>
                                    </div>
                                    <div class="product-card">
                                        <div class="product-image">
                                      <img src="./Images/img9.jpg" alt='first'/>
                                        </div>
                                        <div class="product-info">
                                        <h4>Mocha Brownie Ice Cream Cake</h4>
                                        <button onClick={shoot}>Order Now</button>
                                      
                                        </div>
                                  </div>      
                </section>
      </div>
      {/* Product layout ends */}
    </div>
  );
}

export default Products;

