import React from "react";
import "./App.css";
import Header from "./components/Header";
import Mheader from "./components/Mheader";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Socialicon from "./components/Socialicon";
import Footer from "./components/Footer";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Mheader />
        <Navbar />
        <Section />
        <Socialicon />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
