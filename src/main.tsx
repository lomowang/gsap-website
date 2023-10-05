import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
import "./index.css";
import Nav from "./components/Nav.tsx";
import Hero from "./components/Hero.tsx";
import Product from "./components/Product.tsx";
import ProductShop from "./components/ProductShop.tsx";
import NavBar from "./components/NavBar.tsx";
import "remixicon/fonts/remixicon.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NavBar />
    <Nav />
    <Hero />
    <Product />
    <ProductShop />
  </React.StrictMode>
);
