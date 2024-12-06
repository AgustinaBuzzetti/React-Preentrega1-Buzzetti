import { collection, addDoc } from 'firebase/firestore';
import { db } from './config.js';

const loadBooksToFirestore = async () => {
  try {
    const response = await fetch('https://openlibrary.org/subjects/science_fiction.json?limit=10');
    const data = await response.json();

    const books = data.works.map((book) => ({
      title: book.title,
      author: book.authors?.map((author) => author.name).join(', ') || 'Desconocido',
      cover: book.cover_id ? `https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg` : null,
      url: book.key ? `https://openlibrary.org${book.key}` : '',
    }));

    for (let book of books) {
      await addDoc(collection(db, 'books'), book);
    }

    console.log('Libros cargados a Firestore exitosamente');
  } catch (error) {
    console.error('Error al cargar los libros a Firestore:', error);
  }
};

loadBooksToFirestore();
