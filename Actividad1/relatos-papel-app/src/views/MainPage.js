import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  
import useCart from '../hooks/useCart';
import Cart from '../components/Cart';
import Libros from '../components/Libros';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main-page.css';


const MainPage = () => {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true); // Estado de carga
  const { cartItems, addToCart, removeFromCart } = useCart();
    
  // Simula la carga de libros
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Deja de cargar después de 2 segundos
    }, 2000);
    return () => clearTimeout(timer); // Limpia el temporizador si el componente se desmonta
  }, []);

  const libros = Libros.getLibros();
  const filteredBooks = libros.filter((libro) =>
    libro.title.toLowerCase().includes(search.toLowerCase())
  );

return (
    <div className="main-page">
        <input
            type="text"
            placeholder="Buscar por título"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-bar form-control mb-4"
        />
        
        {/* Reloj de carga (spinner) */}
        {loading ? (
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Cargando...</span>
                </div>
            </div>
        ) : (
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {/* Muestra los libros filtrados */}
                    {filteredBooks.map((book) => (
                        <div key={book.id} className="col">
                            <div className="card h-100">
                                <Link to={`/book/${book.id}`}>
                                    <img src={book.imagen} className="card-img-top" alt={book.title} />
                                </Link>
                                <div className="card-body">
                                    <h5 className="card-title">{book.title}</h5>
                                    <p className="card-text">{book.author}</p>
                                    <button
                                        className="btn btn-primary"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            addToCart(book);
                                        }}
                                    >
                                        Añadir al carrito
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )}

        <Cart items={cartItems} removeFromCart={removeFromCart} />
    </div>
);
};

export default MainPage;
