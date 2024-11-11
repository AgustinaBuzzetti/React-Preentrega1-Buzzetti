import React from 'react';
import Carrito from '../Carrito/Carrito';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Biblioteca</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="d-flex w-100 justify-content-between">
            <div className="navbar-nav mx-auto mb-5">
              <Link className="nav-link active" to="/">Inicio</Link>
              <Link className="nav-link" to="/productos">Sobre Nosotros</Link>
              <Link className="nav-link" to="/contacto">Contacto</Link>
            </div>
          </div>
        </div>
        <form className="d-flex">
              <Carrito />
            </form>
      </div>
    </nav>
  );
};

export default NavBar;