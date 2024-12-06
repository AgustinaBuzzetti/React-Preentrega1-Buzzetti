import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useFetchBooks from '../../hooks/useFetchBooks';
import { useCart } from '../../context/CartContext';
import './BookList.css';

const BookList = () => {
  const { books, loading, error } = useFetchBooks();
  const { addItem } = useCart();
  
  const [booksWithPrice, setBooksWithPrice] = useState([]);

  // Generar precios aleatorios una sola vez cuando los libros se cargan
  useEffect(() => {
    if (books) {
      const booksWithPrice = books.map((book, index) => {
        const price = Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000; // Precio aleatorio
        return { ...book, price }; // Asignamos el precio al libro
      });
      setBooksWithPrice(booksWithPrice);
    }
  }, [books]);

  if (loading) return <p className="cargando">Cargando libros...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="book-list-container">
      <ul>
        {booksWithPrice.map((book, index) => {
          const cleanKey = book.url ? book.url.split('/').pop() : `book-${index}`; // Correcto formato de bookId
          const title = book.title || 'Título no disponible';
          const author = book.author || 'Autor desconocido';
          const coverUrl = book.cover ? book.cover : null;

          return (
            <li key={cleanKey}>
              <h3>{title}</h3>
              <p className="autor">Autor: {author}</p>
              {coverUrl ? (
                <img src={coverUrl} alt={title} />
              ) : (
                <p>No hay imagen disponible</p>
              )}
              <p>Precio: ${book.price}</p> {/* Usar el precio almacenado */}
              <div className="botones">
                <Link to={`/books/${cleanKey}`}>
                  <button className="ver-detalles">Ver detalles</button>
                </Link>
                <button
                  className="carro"
                  onClick={() =>
                    addItem({ id: cleanKey, title: title, price: book.price }) // Usar el precio fijo
                  }
                >
                  Comprar
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BookList;

