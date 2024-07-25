
import React from 'react';
const Hero=()=>{


    return (
        <section
  className="bg-position-top-center bg-repeat-0 pt-5"
  style={{
    backgroundImage: "url(/assets/img/car-finder/home/hero-bg.png)",
    backgroundSize: "1920px 630px"
  }}
>
  <div className="container pt-5">
    <div className="row pt-lg-4 pt-xl-5">
      <div className="col-lg-4 col-md-5 pt-3 pt-md-4 pt-lg-5">
        <h1 className="display-4 text-light pb-2 mb-4 me-md-n5">
          Easy way to find the right car
        </h1>
        <p className="fs-lg text-light opacity-70">
          Finder is a leading digital marketplace for the automotive industry that connects car shoppers with sellers.
        </p>
      </div>
      <div className="col-lg-8 col-md-7 pt-md-5">
        <img
          className="d-block mt-4 ms-auto"
          src="assets/img/car-finder/home/hero-img.png"
          width="800"
          alt="Car"
        />
      </div>
    </div>
  </div>
  <div className="container mt-4 mt-sm-3 mt-lg-n3 pb-5 mb-md-4">
   
    <ul className="nav nav-tabs nav-tabs-light mb-4">
      <li className="nav-item">
        <a className="nav-link active" href="#">
          New
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Used
        </a>
      </li>
    </ul>
    
    <form className="form-group form-group-light d-block">
      <div className="row g-0 ms-lg-n2">
        <div className="col-lg-2">
          <div className="input-group border-end-lg border-light">
            <span className="input-group-text text-muted ps-2 ps-sm-3">
              <i className="fi-search"></i>
            </span>
            <input
              className="form-control"
              type="text"
              name="keywords"
              placeholder="Keywords..."
            />
          </div>
        </div>
        <hr className="hr-light d-lg-none my-2" />
        <div className="col-lg-2 col-md-3 col-sm-6">
          <div className="dropdown border-end-sm border-light" data-bs-toggle="select">
            <button
              className="btn btn-link dropdown-toggle ps-2 ps-sm-3"
              type="button"
              data-bs-toggle="dropdown"
            >
              <i className="fi-list me-2"></i>
              <span className="dropdown-toggle-label">Make</span>
            </button>
            <input type="hidden" name="make" />
            <ul className="dropdown-menu dropdown-menu-dark">
              <li>
                <a className="dropdown-item" href="#">
                  <span className="dropdown-item-label">Acura</span>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <span className="dropdown-item-label">BMW</span>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <span className="dropdown-item-label">Citroen</span>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <span className="dropdown-item-label">Lexus</span>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <span className="dropdown-item-label">Mercedes-Benz</span>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <span className="dropdown-item-label">Nissan</span>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <span className="dropdown-item-label">Toyota</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="hr-light d-sm-none my-2" />
        <div className="col-lg-2 col-md-3 col-sm-6">
          <div className="dropdown border-end-md border-light" data-bs-toggle="select">
            <button
              className="btn btn-link dropdown-toggle ps-2 ps-sm-3"
              type="button"
              data-bs-toggle="dropdown"
            >
              <i className="fi-list me-2"></i>
              <span className="dropdown-toggle-label">Model</span>
            </button>
            <input type="hidden" name="model" />
            <ul className="dropdown-menu dropdown-menu-dark">
              <li>
                <a className="dropdown-item" href="#">
                  <span className="dropdown-item-label">Altima</span>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <span className="dropdown-item-label">Juke</span>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <span className="dropdown-item-label">Leaf</span>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <span className="dropdown-item-label">Maxima</span>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <span className="dropdown-item-label">Micra</span>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <span className="dropdown-item-label">Murano</span>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <span className="dropdown-item-label">Note</span>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <span className="dropdown-item-label">Patrol</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="hr-light d-md-none my-2" />
        <div className="col-lg-2 col-md-3 col-sm-6">
          <div className="dropdown border-end-sm border-light" data-bs-toggle="select">
            <button
              className="btn btn-link dropdown-toggle ps-2 ps-sm-3"
              type="button"
              data-bs-toggle="dropdown"
            >
              <i className="fi-car fs-lg me-2"></i>
              <span className="dropdown-toggle-label">Body type</span>
            </button>
            <input type="hidden" name="type" />
            <ul className="dropdown-menu dropdown-menu-dark">
              <li>
                <a className="dropdown-item" href="#">
                  <span className="dropdown-item-label">Compact</span>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <span className="dropdown-item-label">Crossover</span>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <span className="dropdown-item-label">Coupe</span>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <span className="dropdown-item-label">Family MPV</span>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <span className="dropdown-item-label">Pickup</span>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <span className="dropdown-item-label">Sedan</span>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <span className="dropdown-item-label">SUV</span>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <span className="dropdown-item-label">Wagon</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="hr-light d-sm-none my-2" />
        <div className="col-lg-2 col-md-3 col-sm-6">
          <div className="dropdown" data-bs-toggle="select">
            <button
              className="btn btn-link dropdown-toggle ps-2 ps-sm-3"
              type="button"
              data-bs-toggle="dropdown"
            >
              <i className="fi-map-pin me-2"></i>
              <span className="dropdown-toggle-label">Location</span>
            </button>
            <input type="hidden" name="location" />
            <ul className="dropdown-menu dropdown-menu-dark">
              <li>
                <a className="dropdown-item" href="#">
                  <span className="dropdown-item-label">Dallas</span>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <span className="dropdown-item-label">Los Angeles</span>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <span className="dropdown-item-label">New York</span>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <span className="dropdown-item-label">San Diego</span>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <span className="dropdown-item-label">San Francisco</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="hr-light d-sm-none my-2" />
        <div className="col-lg-2 pt-3 pt-lg-0">
          <button className="btn btn-primary btn-lg w-100" type="button">
            <i className="fi-search me-2"></i>
            <span>Search</span>
          </button>
        </div>
      </div>
    </form>
  </div>
</section>
    );
};
export default Hero;

