import React from "react";

const Hero = () => {
  return (
    <main className="Hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="Hero-button">
          <button>Shop Now</button>
          <button className="secondarybt">Category</button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>
          <div className="Shop">
            <img
              href="https://www.flipkart.com/"
              src="/Images/flipkart.png"
              alt="flipkart"
            />
            <img src="/Images/amazon.png" alt="Amazon" />
          </div>
        </div>

        <img src="" alt="" />
      </div>
      <div className="hero-image">
        <img src="/Images/shoe_image.png" alt="" />
      </div>
    </main>
  );
};

export default Hero;
