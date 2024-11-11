import React from 'react';
import { Link } from 'react-router-dom';
import useFetchBooks from '../../hooks/useFetchBooks';
import './BookList.css';

const BookList = () => {
  const { books, loading, error } = useFetchBooks();

  if (loading) return <p className='cargando'>Cargando libros...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="book-list-container">
      <ul>
        {books.map((book) => {
          const cleanKey = book.key.replace('/works/', '');
          return (
            <li key={book.key}>
              <h3>{book.title}</h3>
              {book.authors && book.authors.length > 0 && (
                <p className="autor">Autor: {book.authors[0].name}</p>
              )}
              {book.cover_id ? (
                <img
                  src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`}
                  alt={book.title}
                />
              ) : (
                <p>No hay imagen disponible</p>
              )}
              <div className='botones'>
              <Link to={`/books/${cleanKey}`}>
                <button className="ver-detalles">Ver detalles</button>
              </Link>
              <button className='carro'>Comprar</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BookList;



