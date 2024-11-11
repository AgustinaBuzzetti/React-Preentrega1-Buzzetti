import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar/NavBar';
import BookDetails from './pages/BookDetails';
import BookList from './components/BookList/BookList';


function App() {
  return (
    <Router>
      <div className="app-container">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/books/:bookId" element={<BookDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;