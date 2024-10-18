// Router/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../page/Home'; // Example homepage component
import ProductPage from '../page/Rings'; // Import your ProductPage component
import Navbar from '../component/Navbar'; // Import your Navbar component
import CartRavindra from "../page/CartRavindra"

const AppRouter = () => {
  return (
  <div>
      <Navbar /> {/* Place your Navbar here */}
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Adjust according to your home page component */}
        <Route path="/rings" element={<ProductPage />} /> {/* Route for ProductPage */}
        <Route path="/cart" element={<CartRavindra />} /> 
      </Routes>
      </div>
  );
};

export default AppRouter;
