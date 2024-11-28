import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import NotFound from "./pages/NotFound";

export default function Navbar() {
  return (
    <div>
      <Routes>
        <Route path="/">
          <Route index element={<Home></Home>} />
          <Route path="about" element={<About />} />
          <Route path="services">
            <Route index element={<Services />} />
          </Route>
          <Route path="contact" element={<Contact />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}
