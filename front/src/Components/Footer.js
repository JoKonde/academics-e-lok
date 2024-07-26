import React from 'react';

const Footer = () => {

    return (
        <footer className="footer bg-faded-light">
  <div className="border-bottom border-light py-4">
    <div className="container d-sm-flex align-items-center justify-content-between">
      <a className="d-inline-block" href="real-estate-home-v1.html">
        <img src="assets/img/logo/logo-light.svg" width="116" alt="logo" />
      </a>
      <div className="d-flex pt-3 pt-sm-0">
        <div className="dropdown ms-n3">
          <button
            className="btn btn-light btn-link btn-sm dropdown-toggle fw-normal py-2"
            type="button"
            data-bs-toggle="dropdown"
          >
            <i className="fi-globe me-2"></i>Eng
          </button>
          <div className="dropdown-menu dropdown-menu-dark w-100">
            <a className="dropdown-item" href="#">
              Deutsch
            </a>
            <a className="dropdown-item" href="#">
              Français
            </a>
            <a className="dropdown-item" href="#">
              Español
            </a>
          </div>
        </div>
        <div className="dropdown">
          <button
            className="btn btn-light btn-link btn-sm dropdown-toggle fw-normal py-2 pe-2"
            type="button"
            data-bs-toggle="dropdown"
          >
            <i className="fi-map-pin me-2"></i>New York
          </button>
          <div
            className="dropdown-menu dropdown-menu-dark dropdown-menu-sm-end"
            style={{ minWidth: '7.5rem' }}
          >
            <a className="dropdown-item" href="#">
              Chicago
            </a>
            <a className="dropdown-item" href="#">
              Dallas
            </a>
            <a className="dropdown-item" href="#">
              Los Angeles
            </a>
            <a className="dropdown-item" href="#">
              San Diego
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container pt-4 pb-3 pt-lg-5 pb-lg-4">
    <div className="row pt-2 pt-lg-0">
      <div className="col-lg-3 pb-2 mb-4">
        <h3 className="h5 text-light mb-2">Subscribe to our newsletter</h3>
        <p className="fs-sm text-light opacity-70">
          Don’t miss any relevant offers!
        </p>
        <form className="form-group form-group-light w-100">
          <div className="input-group input-group-sm">
            <span className="input-group-text">
              <i className="fi-mail"></i>
            </span>
            <input className="form-control" type="text" placeholder="Your email" />
          </div>
          <button className="btn btn-primary btn-icon btn-sm" type="button">
            <i className="fi-send"></i>
          </button>
        </form>
      </div>
      <div className="col-lg-2 col-md-3 col-sm-6 offset-xl-1 mb-2 mb-sm-4">
        <h3 className="fs-base text-light">Buying &amp; Selling</h3>
        <ul className="list-unstyled fs-sm">
          <li>
            <a className="nav-link-light" href="#">
              Find a car
            </a>
          </li>
          <li>
            <a className="nav-link-light" href="#">
              Sell your car
            </a>
          </li>
          <li>
            <a className="nav-link-light" href="#">
              Car dealers
            </a>
          </li>
          <li>
            <a className="nav-link-light" href="#">
              Compare cars
            </a>
          </li>
          <li>
            <a className="nav-link-light" href="#">
              Online car appraisal
            </a>
          </li>
        </ul>
      </div>
      <div className="col-lg-2 col-md-3 col-sm-6 mb-2 mb-sm-4">
        <h3 className="fs-base text-light">About</h3>
        <ul className="list-unstyled fs-sm">
          <li>
            <a className="nav-link-light" href="#">
              About Finder
            </a>
          </li>
          <li>
            <a className="nav-link-light" href="#">
              Contact us
            </a>
          </li>
          <li>
            <a className="nav-link-light" href="#">
              FAQs &amp; support
            </a>
          </li>
          <li>
            <a className="nav-link-light" href="#">
              Mobile app
            </a>
          </li>
          <li>
            <a className="nav-link-light" href="#">
              Blog
            </a>
          </li>
        </ul>
      </div>
      <div className="col-lg-2 col-md-3 col-sm-6 mb-2 mb-sm-4">
        <h3 className="fs-base text-light">Profile</h3>
        <ul className="list-unstyled fs-sm">
          <li>
            <a className="nav-link-light" href="#">
              My account
            </a>
          </li>
          <li>
            <a className="nav-link-light" href="#">
              Wishlist
            </a>
          </li>
          <li>
            <a className="nav-link-light" href="#">
              My listings
            </a>
          </li>
          <li>
            <a className="nav-link-light" href="#">
              Add listing
            </a>
          </li>
        </ul>
      </div>
      <div className="col-xl-2 col-lg-3 col-sm-6 col-md-3 mb-2 mb-sm-4">
        <a className="d-flex align-items-center text-decoration-none mb-2" href="tel:4065550120">
          <i className="fi-device-mobile me-2"></i>
          <span className="text-light">(406) 555-0120</span>
        </a>
        <a className="d-flex align-items-center text-decoration-none mb-2" href="mailto:example@email.com">
          <i className="fi-mail me-2"></i>
          <span className="text-light">example@email.com</span>
        </a>
        <div className="d-flex flex-wrap pt-4">
          <a
            className="btn btn-icon btn-translucent-light btn-xs rounded-circle mb-2 me-2"
            href="#"
          >
            <i className="fi-facebook"></i>
          </a>
          <a
            className="btn btn-icon btn-translucent-light btn-xs rounded-circle mb-2 me-2"
            href="#"
          >
            <i className="fi-twitter"></i>
          </a>
          <a
            className="btn btn-icon btn-translucent-light btn-xs rounded-circle mb-2 me-2"
            href="#"
          >
            <i className="fi-telegram"></i>
          </a>
          <a className="btn btn-icon btn-translucent-light btn-xs rounded-circle mb-2" href="#">
            <i className="fi-messenger"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="container d-lg-flex align-items-center justify-content-between fs-sm pb-3">
    <div className="d-flex flex-wrap justify-content-center order-lg-2 mb-3">
      <a className="nav-link nav-link-light fw-normal" href="#">
        Terms of use
      </a>
      <a className="nav-link nav-link-light fw-normal" href="#">
        Privacy policy
      </a>
      <a className="nav-link nav-link-light fw-normal" href="#">
        Accessibility statement
      </a>
      <a className="nav-link nav-link-light fw-normal pe-0" href="#">
        Interest based ads
      </a>
    </div>
    <p className="text-center text-lg-start order-lg-1 mb-lg-0">
      <span className="text-light opacity-50">&copy; All rights reserved. Made by </span>
      <a
        className="nav-link-light fw-bold"
        href="https://createx.studio/"
        target="_blank"
        rel="noopener"
      >
        Createx Studio
      </a>
    </p>
  </div>
</footer>

    );
};

export default Footer;
