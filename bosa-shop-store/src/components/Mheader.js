import React from "react";
import "../sass/Header.css";

function Mheader() {
  return (
    <div className="midHeader">
      <div className="container">
        <div className="flex">
          <div>
            <img src={require("../assets/shop-store-logo.png")} alt="logo" />
          </div>
          <div>
            <img
              width="500px"
              src={require("../assets/banner-img.jpg")}
              alt="banner-img"
            />
          </div>
          <div className="social-icons social-media-icons">
            <i class="bi bi-arrow-repeat"></i>
            <i class="bi bi-heart"></i>
            <i class="bi bi-person"></i>
            <i class="bi bi-cart3"></i>
            <span>$0.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mheader;
