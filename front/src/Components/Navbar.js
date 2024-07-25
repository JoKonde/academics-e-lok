import React from 'react';

const Navbar = () => {
  return (
    <header className="navbar navbar-expand-lg navbar-dark fixed-top" data-scroll-header>
      <div className="container">
        <a className="navbar-brand me-3 me-xl-4" href="car-finder-home.html">
          <img className="d-block" src="assets/img/logo/logo-light.svg" width="116" alt="Finder" />
        </a>
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
          <i className="fi-user me-2"></i>Sign in
        </a>
        <a className="btn btn-primary btn-sm ms-2 order-lg-3" href="car-finder-sell-car.html">
          <i className="fi-plus me-2"></i>Sell car
        </a>
        <div className="collapse navbar-collapse order-lg-2" id="navbarNav">
          <ul className="navbar-nav navbar-nav-scroll" style={{ maxHeight: '35rem' }}>
            <li className="nav-item dropdown me-lg-2">
              <a className="nav-link dropdown-toggle align-items-center pe-lg-4" href="#" data-bs-toggle="dropdown" role="button" aria-expanded="false">
                <i className="fi-layers me-2"></i>Demos
                <span className="d-none d-lg-block position-absolute top-50 end-0 translate-middle-y border-end border-light" style={{ width: '1px', height: '30px' }}></span>
              </a>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li><a className="dropdown-item" href="real-estate-home-v1.html"><i className="fi-building fs-base me-2"></i>Real Estate Demo</a></li>
                <li className="dropdown-divider"></li>
                <li><a className="dropdown-item" href="car-finder-home.html"><i className="fi-car fs-base me-2"></i>Car Finder Demo</a></li>
                <li className="dropdown-divider"></li>
                <li><a className="dropdown-item" href="job-board-home-v1.html"><i className="fi-briefcase fs-base me-2"></i>Job Board Demo</a></li>
                <li className="dropdown-divider"></li>
                <li><a className="dropdown-item" href="city-guide-home-v1.html"><i className="fi-map-pin fs-base me-2"></i>City Guide Demo</a></li>
                <li className="dropdown-divider"></li>
                <li><a className="dropdown-item" href="index-2.html"><i className="fi-home fs-base me-2"></i>Main Page</a></li>
                <li><a className="dropdown-item" href="components/typography.html"><i className="fi-list fs-base me-2"></i>Components</a></li>
                <li><a className="dropdown-item" href="docs/dev-setup.html"><i className="fi-file fs-base me-2"></i>Documentation</a></li>
              </ul>
            </li>
            <li className="nav-item active"><a className="nav-link" href="car-finder-home.html">Home</a></li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Catalog</a>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li><a className="dropdown-item" href="car-finder-catalog-list.html">List View</a></li>
                <li><a className="dropdown-item" href="car-finder-catalog-grid.html">Grid View</a></li>
                <li><a className="dropdown-item" href="car-finder-single.html">Car Single Page</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Account</a>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li><a className="dropdown-item" href="car-finder-account-info.html">Personal Info</a></li>
                <li><a className="dropdown-item" href="car-finder-account-security.html">Password &amp; Security</a></li>
                <li><a className="dropdown-item" href="car-finder-account-cars.html">My Cars</a></li>
                <li><a className="dropdown-item" href="car-finder-account-wishlist.html">Wishlist</a></li>
                <li><a className="dropdown-item" href="car-finder-account-reviews.html">Reviews</a></li>
                <li><a className="dropdown-item" href="car-finder-account-notifications.html">Notifications</a></li>
                <li><a className="dropdown-item" href="signin-dark.html">Sign In</a></li>
                <li><a className="dropdown-item" href="signup-dark.html">Sign Up</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Vendor</a>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li><a className="dropdown-item" href="car-finder-sell-car.html">Sell Car</a></li>
                <li><a className="dropdown-item" href="car-finder-promotion.html">Ad Promotion Page</a></li>
                <li><a className="dropdown-item" href="car-finder-vendor.html">Vendor Page</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages</a>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li><a className="dropdown-item" href="car-finder-about.html">About</a></li>
                <li className="dropdown">
                  <a className="dropdown-item dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Blog</a>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li><a className="dropdown-item" href="car-finder-blog.html">Blog Grid</a></li>
                    <li><a className="dropdown-item" href="car-finder-blog-single.html">Single Post</a></li>
                  </ul>
                </li>
                <li><a className="dropdown-item" href="car-finder-contacts.html">Contacts</a></li>
                <li><a className="dropdown-item" href="car-finder-help-center.html">Help Center</a></li>
                <li><a className="dropdown-item" href="car-finder-404.html">404 Not Found</a></li>
              </ul>
            </li>
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
