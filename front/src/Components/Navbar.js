import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="navbar navbar-expand-lg navbar-dark fixed-top" data-scroll-header>
      <div className="container">
        <Link className="navbar-brand me-3 me-xl-4" to="/">
          <img className="d-block" src="assets/img/lg2.png" width="116" alt="E-Lok" />
        </Link>
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="btn btn-link btn-light btn-sm d-none d-lg-block order-lg-3" href="#signin-modal" data-bs-toggle="modal">
          <i className="fi-user me-2"></i>Se Connecter
        </a>
        <a className="btn btn-primary btn-sm ms-2 order-lg-3"
        data-bs-toggle="modal"
        data-bs-dismiss="modal"
        href="#signup-modal">
          <i className="fi-plus me-2"></i>Créer Compte
        </a>
        <div className="collapse navbar-collapse order-lg-2" id="navbarNav">
          <ul className="navbar-nav navbar-nav-scroll" style={{ maxHeight: '35rem' }}>
            <li className="nav-item dropdown me-lg-2">
              <Link className="nav-link align-items-center pe-lg-4" to="/" role="button" aria-expanded="false">
                <i className="fi-layers me-2"></i>Acceuil
                <span className="d-none d-lg-block position-absolute top-50 end-0 translate-middle-y border-end border-light" style={{ width: '1px', height: '30px' }}></span>
              </Link>
              
            </li>
            <li className="nav-item active"><Link className="nav-link" to="/">Info</Link></li>
            <li className="nav-item "><Link className="nav-link" to="/">Contact</Link></li>
            <li className="nav-item "><Link className="nav-link" to="/">A Propos</Link></li>
            
            <li className="nav-item d-lg-none">
              <a className="nav-link" href="#signin-modal" data-bs-toggle="modal"><i className="fi-user me-2"></i>Sign in</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
