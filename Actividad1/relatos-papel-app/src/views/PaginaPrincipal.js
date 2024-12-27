import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  
import useCarrito from '../hooks/useCarrito';
import Carrito from '../components/Carrito';
import Libros from '../components/Libros';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/pagina-principal.css';


const PaginaPrincipal = () => {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true); // Estado de carga
  const { cartItems, añadeItemCarrito, borraItemCarrito } = useCarrito();
    
  // Simula la carga de libros
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Deja de cargar después de 2 segundos
    }, 2000);
    return () => clearTimeout(timer); // Limpia el temporizador si el componente se desmonta
  }, []);

  const libros = Libros.getLibros();
  const busquedaLibros = libros.filter((libro) =>
    libro.titulo.toLowerCase().includes(search.toLowerCase())
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
           <div className="full-height-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Cargando...</span>
                </div>
            </div>
        ) : (
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {/* Muestra los libros filtrados */}
                    {busquedaLibros.map((libro) => (
                        <div key={libro.id} className="col">
                            <div className="card h-100">
                                <Link to={`/libro/${libro.id}`}>
                                    <img src={libro.imagen} className="card-img-top" alt={libro.titulo} />
                                </Link>
                                <div className="card-body">
                                    <h5 className="card-title">{libro.titulo}</h5>
                                    <p className="card-text">{libro.autor}</p>
                                    <button
                                        className="btn btn-primary"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            añadeItemCarrito(libro);
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

        <Carrito items={cartItems} borraItemCarrito={borraItemCarrito} />
    </div>
);
};

export default PaginaPrincipal;
