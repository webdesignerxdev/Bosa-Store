import React from "react";
import NavData from "../data/NavData";
import "../sass/Header.css";
import { Link, Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";

function Navbar() {
  return (
    <>
      <div className="border-top-bottom">
        <div className="container">
          <div className="flex">
            <nav className="navbar-brand">
              <ul>
                <li className="nav-brand-item">
                  <Link to="/" className="nav-link nav-link-bold">
                    <i class="bi bi-list"></i> Categories
                  </Link>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link to="/">Decoration</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/">Chair</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/">Furniture</Link>
                    </li>
                  </ul>
                </li>
                {NavData.map((item) => (
                  <li>
                    <Link to={`/cat/${item.id}`} className="nav-link-bold">
                      {item.navName}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="search-box">
              <input
                className="search-input"
                type="text"
                placeholder="Search Products..."
              />

              <div className="cta">
                <span>
                  All Categories <i class="bi bi-chevron-compact-down"></i>
                </span>
                <ul className="dropdown">
                  <li className="nav-item">
                    <Link to="/">All Categories</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/">Decoration(4)</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/">Chair(2)</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/">Furniture(5)</Link>
                  </li>
                </ul>
              </div>
              <span className="search-icon">
                <i class="bi bi-search"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/cat/:cid" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default Navbar;
