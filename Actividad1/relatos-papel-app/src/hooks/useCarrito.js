import { useState, useEffect } from 'react';

const useCarrito = () => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const añadeItemCarrito = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const borraItemCarrito = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const limpiaCarrito = () => {
    console.log('Clearing cart...');
    setCartItems([]);
  };

  return { cartItems, añadeItemCarrito, borraItemCarrito, limpiaCarrito };
};

export default useCarrito;