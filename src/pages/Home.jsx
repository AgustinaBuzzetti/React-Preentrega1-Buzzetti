import BookList from "../components/BookList/BookList";
import useFetchBooks from '../hooks/useFetchBooks';
import './Home.css';

function Home() {
  const { books, loading, error } = useFetchBooks();

  if (loading) return <p>Cargando libros...</p>;
  if (error) return <p>Ocurrió un error al cargar los libros.</p>;

  return (
    <div className="todo">
      <h1>Catálogo</h1>
      <BookList books={books} />
    </div>
  );
}

export default Home;
