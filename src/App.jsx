import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar/NavBar';
import BookDetails from './pages/BookDetails';
import BookList from './components/BookList/BookList';
import Cart from './pages/Cart';
import { CartProvider } from './context/CartContext';
import SobreNosotros from './pages/SobreNosotros';
import Contacto from './pages/Contacto';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="app-container">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<BookList />} />
            <Route path="/books/:bookId" element={<BookDetails />} />
            <Route path="/cart" element={<Cart />} /> {}
            <Route path="/sobre-nosotros" element={<SobreNosotros />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
