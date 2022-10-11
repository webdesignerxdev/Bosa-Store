import React from "react";
import { Link} from "react-router-dom";
import Data from "../data/Data";
import "../sass/Header.css";

function Header() {
  return (
    <header className="header">
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
            <i class="bi bi-facebook "></i>
            <i class="bi bi-instagram "></i>
            <i class="bi bi-twitter "></i>
            <i class="bi bi-pinterest "></i>
            <i class="bi bi-linkedin "></i>
            <i class="fa-solid fa-bars-staggered "></i>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
