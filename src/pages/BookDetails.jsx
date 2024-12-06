import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './BookDetails.css';

const BookDetails = () => {
  const { bookId } = useParams();
  const [bookDetails, setBookDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`https://openlibrary.org/works/${bookId}.json`);
        const data = await response.json();
        console.log(data);
        setBookDetails(data);
        setLoading(false);
      } catch (err) {
        setError('Error al cargar los detalles del libro');
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, [bookId]);

  if (loading) return <p>Cargando detalles del libro...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="book-details-container">
      {bookDetails ? (
        <>
          <h2>{bookDetails.title}</h2>
          {bookDetails.description && (
            <p><strong>Descripción:</strong> {bookDetails.description.value || bookDetails.description}</p>
          )}
          {bookDetails.subjects && (
            <p><strong>Temas:</strong> {bookDetails.subjects.join(', ')}</p>
          )}
        </>
      ) : (
        <p>No se encontraron detalles para este libro.</p>
      )}
    </div>
  );
};

export default BookDetails;


