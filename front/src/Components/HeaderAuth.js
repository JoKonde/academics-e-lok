import React from 'react';
import { Link } from 'react-router-dom';

const HeaderAuth=()=>{

    return(
        <>
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
        <div className="dropdown d-none d-lg-block order-lg-3 my-n2 me-3">
          <a className="d-block py-2" href="car-finder-account-info.html">
            <img className="rounded-circle" src="assets/img/avatars/02.jpg" width="40" alt="Robert Fox" />
          </a>
          <div className="dropdown-menu dropdown-menu-dark dropdown-menu-end">
            <div className="d-flex align-items-start border-bottom border-light px-3 py-1 mb-2" style={{ width: '16rem' }}>
              <img className="rounded-circle" src="assets/img/avatars/01.jpg" width="48" alt="Robert Fox" />
              <div className="ps-2">
                <h6 className="fs-base text-light mb-0">Robert Fox</h6>
                <span className="star-rating star-rating-sm">
                  <i className="star-rating-icon fi-star-filled active"></i>
                  <i className="star-rating-icon fi-star-filled active"></i>
                  <i className="star-rating-icon fi-star-filled active"></i>
                  <i className="star-rating-icon fi-star-filled active"></i>
                  <i className="star-rating-icon fi-star-filled active"></i>
                </span>
                <div className="fs-xs py-2">
                  (302) 555-0107<br />
                  robert_fox@email.com
                </div>
              </div>
            </div>
            <a className="dropdown-item" href="car-finder-account-info.html"><i className="fi-user me-2"></i>Personal Info</a>
            <a className="dropdown-item" href="car-finder-account-security.html"><i className="fi-lock me-2"></i>Password &amp; Security</a>
            <a className="dropdown-item" href="car-finder-account-cars.html"><i className="fi-car me-2"></i>My Cars</a>
            <a className="dropdown-item" href="car-finder-account-wishlist.html">
              <i className="fi-heart me-2"></i>Wishlist<span className="badge bg-faded-light ms-2">4</span>
            </a>
            <a className="dropdown-item" href="car-finder-account-reviews.html"><i className="fi-star me-2"></i>Reviews</a>
            <a className="dropdown-item" href="car-finder-account-notifications.html"><i className="fi-bell me-2"></i>Notifications</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="car-finder-help-center.html">Help</a>
            <a className="dropdown-item" href="signin-dark.html">Sign Out</a>
          </div>
        </div>
        <a className="btn btn-primary btn-sm ms-2 order-lg-3" href="car-finder-sell-car.html">
          <i className="fi-plus me-2"></i>Sell car
        </a>
        <div className="collapse navbar-collapse order-lg-2" id="navbarNav">
          <ul className="navbar-nav navbar-nav-scroll" style={{ maxHeight: '35rem' }}>
            {/* Demos switcher */}
            <li className="nav-item dropdown me-lg-2">
            <Link className="nav-link align-items-center pe-lg-4" to="/" role="button" aria-expanded="false">
                <i className="fi-layers me-2"></i>Acceuil
                <span className="d-none d-lg-block position-absolute top-50 end-0 translate-middle-y border-end border-light" style={{ width: '1px', height: '30px' }}></span>
              </Link>
              
            </li>
            {/* Menu items */}
            <li className="nav-item active"><Link className="nav-link" to="/">Info</Link></li>
            <li className="nav-item "><Link className="nav-link" to="/">Contact</Link></li>
            <li className="nav-item "><Link className="nav-link" to="/">A Propos</Link></li>
          </ul>
        </div>
      </div>
    </header>
        
        </>
    );

}
export default HeaderAuth;