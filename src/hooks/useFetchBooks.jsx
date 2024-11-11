import { useState, useEffect } from 'react';

function useFetchBooks() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://openlibrary.org/subjects/science_fiction.json?limit=10');
        const data = await response.json();
        setBooks(data.works);
      } catch (err) {
        setError('Ocurrió un error al cargar los libros.');
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return { books, loading, error };
}

export default useFetchBooks;


