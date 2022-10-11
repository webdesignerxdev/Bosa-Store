import React from "react";
import Data from "../data/Data";
import "../sass/Header.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="flex">
          <nav>
            <ul>
              {Data.map((item) => (
                <li>
                  <Link to="/">{item.catName}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="social-icons">
            <i class="fa-brands fa-cc-visa"></i>
            <i class="fa-brands fa-cc-mastercard"></i>
            <i class="fa-brands fa-cc-amex"></i>
          </div>
          <div>Copyright © 2022 Bosa Shop Store. Powered by WordPress</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
