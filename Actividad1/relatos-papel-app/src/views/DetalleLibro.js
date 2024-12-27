import React from 'react';
import { useParams } from 'react-router-dom';
import useCarrito from '../hooks/useCarrito';
import Carrito from '../components/Carrito';
import ReseñasLibro from '../components/ReseñasLibros';
import Libros from '../components/Libros';
import BotonVolver from '../components/BotonVolver';
import '../styles/detalles-libro.css';

const DetalleLibro = () => {
  const { id } = useParams();
  const { cartItems, añadeItemCarrito, borraItemCarrito } = useCarrito();
  const libros = Libros.getLibros();
  const libro = libros.find((b) => b.id === parseInt(id, 10));

  if (!libro) return <p>Libro no encontrado.</p>;

return (
    <div className="container detalles-libro">
        <div className="row">
            <div className="col-md-4">
                <img src={libro.imagen} alt={libro.titulo} className="img-fluid libro-imagen" />
            </div>
            <div className="col-md-8">
                <div className="details">
                  {/* Componente Botón de volver */}
                    <BotonVolver />
                    <p className="autor">{libro.autor}</p>
                    <h2 className="titulo">{libro.titulo}</h2>
                    <p className="descripcion">{libro.descripcion}</p>
                    <button className="btn btn-primary" id="añade-libro" onClick={() => añadeItemCarrito(libro)}>Añadir al carrito</button>
                </div>
            </div>
        </div>
        <div className="row mt-4">
            <div className="col-12">
                <Carrito items={cartItems} borraItemCarrito={borraItemCarrito} />
            </div>
        </div>
        <div className="row mt-4">
        <div className="col-12">
          {/* Componente de Reseñas */}
          <ReseñasLibro idLibro={libro.id} />
        </div>
      </div>
    </div>
  );
};

export default DetalleLibro;