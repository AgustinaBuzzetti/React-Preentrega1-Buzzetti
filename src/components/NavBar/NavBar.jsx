import Carrito from "../Carrito/Carrito"

const NavBar = () => {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Preentrega</a>
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
              <div className="navbar-nav mx-auto">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                <a className="nav-link" href="#">Productos</a>
                <a className="nav-link" href="#">Contacto</a>
              </div>
              <form className="d-flex">
                <Carrito />
              </form>
            </div>
          </div>
        </div>
      </nav>
    );
  };

export default NavBar