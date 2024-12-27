import React from 'react';
import { useParams } from 'react-router-dom';
import useCart from '../hooks/useCart';
import Cart from '../components/Cart';
import ReseñasLibro from '../components/ReseñasLibros';
import Libros from '../components/Libros';
import BotonVolver from '../components/BotonVolver';
import '../styles/book-details.css';

const BookDetails = () => {
  const { id } = useParams();
  const { cartItems, addToCart, removeFromCart } = useCart();
  const libros = Libros.getLibros();
  const book = libros.find((b) => b.id === parseInt(id, 10));

  if (!book) return <p>Libro no encontrado.</p>;

return (
    <div className="container book-details">
        <div className="row">
            <div className="col-md-4">
                <img src={book.imagen} alt={book.title} className="img-fluid book-image" />
            </div>
            <div className="col-md-8">
                <div className="details">
                    <BotonVolver />
                    <p className="author">{book.author}</p>
                    <h2 className="title">{book.title}</h2>
                    <p className="description">{book.description}</p>
                    <button className="btn btn-primary" id="añade-libro" onClick={() => addToCart(book)}>Añadir al carrito</button>
                </div>
            </div>
        </div>
        <div className="row mt-4">
            <div className="col-12">
                <Cart items={cartItems} removeFromCart={removeFromCart} />
            </div>
        </div>
        <div className="row mt-4">
        <div className="col-12">
          {/* Componente de Reseñas */}
          <ReseñasLibro idLibro={book.id} />
        </div>
      </div>
    </div>
  );
};

export default BookDetails;