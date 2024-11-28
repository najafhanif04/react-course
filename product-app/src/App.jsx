import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import DetailPage from "./pages/DetailPage";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store/addToCart/cartslice";
import Prod from "./components/Prod";

function App() {
  const prod = [
    { image: "/product.jpg", price: "20$" },
    { image: "/images.jpeg", price: "40$" },
    { image: "/product.jpg", price: "60$" },
    { image: "/images.jpeg", price: "80$" },
    { image: "/product.jpg", price: "90$" },
  ];

  const dispatch = useDispatch();
  const selector = useSelector((state) => state.cart.product);

  const handleCart = (image, price) => {
    const product = {
      image,
      price,
    };

    dispatch(addToCart(product));
  };

  return (
    <>
      <div>
        {prod.map(({ image, price }, index) => (
          <div key={index}>
            <img src={`${image}`} className="w-40" alt="" />
            <p>price {price}</p>
            <button
              onClick={() => handleCart(image, price)}
              className="bg-black text-white"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      {/* <Navbar />
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='product' element={<Product />} />
          <Route path='product/:id' element={<DetailPage />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes> */}
      {/*  */}
      <h1 className="mt-72 text-4xl font-semibold">Cart Items</h1>
      <Prod />
    </>
  );
}

export default App;
