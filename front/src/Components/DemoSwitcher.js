import React from 'react';

const DemoSwitcher = () => {
  return (
    <>
      {/* Button for demo switcher */}
      <button
        className="btn btn-icon btn-light rounded-circle shadow position-fixed top-50 end-0 translate-middle-y me-3"
        type="button"
        data-bs-toggle="tooltip"
        data-bs-placement="left"
        title="Choose Demo"
        style={{ zIndex: 1035 }}
      >
        <span
          className="d-flex align-items-center justify-content-center position-absolute top-0 start-0 w-100 h-100 rounded-circle"
          data-bs-toggle="offcanvas"
          data-bs-target="#demo-switcher"
        >
          <i className="fi-layers"></i>
        </span>
      </button>

      {/* Offcanvas menu */}
      <div className="offcanvas offcanvas-end" id="demo-switcher">
        <div className="offcanvas-header d-block border-bottom">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h2 className="h5 mb-0">Choose Demo</h2>
            <button
              className="btn-close"
              type="button"
              data-bs-dismiss="offcanvas"
            ></button>
          </div>
          <div className="d-flex">
            <a
              className="btn btn-outline-secondary btn-sm w-100 me-2"
              href="index-2.html"
            >
              <i className="fi-home me-2"></i>Main Page
            </a>
            <a
              className="btn btn-outline-secondary btn-sm w-100"
              href="components/typography.html"
            >
              <i className="fi-file me-2"></i>Docs / UI Kit
            </a>
          </div>
        </div>
        <div className="offcanvas-body">
          <div className="card card-hover shadow-sm mb-4">
            <img
              className="card-img-top"
              src="assets/img/intro/demos/offcanvas/car-finder.jpg"
              alt="Car Finder Demo"
            />
            <div className="card-body p-3">
              <h3 className="fs-base card-title text-center">
                <a className="nav-link stretched-link" href="car-finder-home.html">
                  Car Finder Demo
                </a>
              </h3>
            </div>
          </div>
          <div className="card card-hover shadow-sm mb-4">
            <img
              className="card-img-top"
              src="assets/img/intro/demos/offcanvas/real-estate.jpg"
              alt="Real Estate Demo"
            />
            <div className="card-body p-3">
              <h3 className="fs-base card-title text-center">
                <a className="nav-link stretched-link" href="real-estate-home-v1.html">
                  Real Estate Demo
                </a>
              </h3>
            </div>
          </div>
          <div className="card card-hover shadow-sm mb-4">
            <img
              className="card-img-top"
              src="assets/img/intro/demos/offcanvas/job-board.jpg"
              alt="Job Board Demo"
            />
            <div className="card-body p-3">
              <h3 className="fs-base card-title text-center">
                <a className="nav-link stretched-link" href="job-board-home-v1.html">
                  Job Board Demo
                </a>
              </h3>
            </div>
          </div>
          <div className="card card-hover shadow-sm mb-4">
            <img
              className="card-img-top"
              src="assets/img/intro/demos/offcanvas/city-guide.jpg"
              alt="City Guide Demo"
            />
            <div className="card-body p-3">
              <h3 className="fs-base card-title text-center">
                <a className="nav-link stretched-link" href="city-guide-home-v1.html">
                  City Guide Demo
                </a>
              </h3>
            </div>
          </div>
        </div>
        <div className="offcanvas-header border-top">
          <a
            className="btn btn-primary btn-lg w-100"
            href="https://themes.getbootstrap.com/product/finder-directory-listings-template-ui-kit/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fi-cart fs-lg me-2"></i>Buy Finder
          </a>
        </div>
      </div>

      {/* Page loading spinner */}
      <div className="page-loading active">
        <div className="page-loading-inner">
          <div className="page-spinner"></div>
          <span>Loading...</span>
        </div>
      </div>
    </>
  );
};

export default DemoSwitcher;
