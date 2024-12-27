import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PaginaCarga from '../views/PaginaCarga';
import PaginaPrincipal from '../views/PaginaPrincipal';
import DetalleLibro from '../views/DetalleLibro';
import Checkout from '../views/Checkout';

const GlobalRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<PaginaCarga />} />
      <Route path="/main" element={<PaginaPrincipal />} />
      <Route path="/libro/:id" element={<DetalleLibro />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
};

export default GlobalRouter;