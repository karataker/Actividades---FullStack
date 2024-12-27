import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../views/LandingPage';
import MainPage from '../views/MainPage';
import BookDetails from '../views/BookDetails';
import Checkout from '../views/Checkout';

const GlobalRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/book/:id" element={<BookDetails />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
};

export default GlobalRouter;