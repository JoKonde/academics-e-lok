import React from 'react';
import { Link } from 'react-router-dom';


function BodyType(){
    return(
<section className="container pb-5 mb-md-4">
  <div className="d-sm-flex align-items-center justify-content-between mb-3 mb-sm-4 pb-sm-2">
    <h2 className="h3 text-light mb-2 mb-sm-0">Les Populaires</h2>
    <Link className="btn btn-link btn-light fw-normal px-0" to="/">
      Voir
      <i className="fi-arrow-long-right fs-sm mt-0 ps-1 ms-2"></i>
    </Link>
  </div>
  <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-2 g-md-4">
    {/* Item */}
    <div className="col">
      <div className="card card-body card-light card-hover bg-transparent border-0 px-0 pt-0 text-center">
        <img className="d-block mx-auto mb-3" src="assets/img/car-finder/icons/sedan.svg" width="160" alt="Sedan" />
        <a className="nav-link-light stretched-link fw-bold" href="#">Sedan</a>
      </div>
    </div>
    {/* Item */}
    <div className="col">
      <div className="card card-body card-light card-hover bg-transparent border-0 px-0 pt-0 text-center">
        <img className="d-block mx-auto mb-3" src="assets/img/car-finder/icons/suv.svg" width="160" alt="SUV" />
        <a className="nav-link-light stretched-link fw-bold" href="#">SUV</a>
      </div>
    </div>
    {/* Item */}
    <div className="col">
      <div className="card card-body card-light card-hover bg-transparent border-0 px-0 pt-0 text-center">
        <img className="d-block mx-auto mb-3" src="assets/img/car-finder/icons/wagon.svg" width="160" alt="Wagon" />
        <a className="nav-link-light stretched-link fw-bold" href="#">Wagon</a>
      </div>
    </div>
    {/* Item */}
    <div className="col">
      <div className="card card-body card-light card-hover bg-transparent border-0 px-0 pt-0 text-center">
        <img className="d-block mx-auto mb-3" src="assets/img/car-finder/icons/crossover.svg" width="160" alt="Crossover" />
        <a className="nav-link-light stretched-link fw-bold" href="#">Crossover</a>
      </div>
    </div>
    {/* Item */}
    <div className="col">
      <div className="card card-body card-light card-hover bg-transparent border-0 px-0 pt-0 text-center">
        <img className="d-block mx-auto mb-3" src="assets/img/car-finder/icons/coupe.svg" width="160" alt="Coupe" />
        <a className="nav-link-light stretched-link fw-bold" href="#">Coupe</a>
      </div>
    </div>
    {/* Item */}
    <div className="col">
      <div className="card card-body card-light card-hover bg-transparent border-0 px-0 pt-0 text-center">
        <img className="d-block mx-auto mb-3" src="assets/img/car-finder/icons/pickup.svg" width="160" alt="Pickup" />
        <a className="nav-link-light stretched-link fw-bold" href="#">Pickup</a>
      </div>
    </div>
    {/* Item */}
    <div className="col">
      <div className="card card-body card-light card-hover bg-transparent border-0 px-0 pt-0 text-center">
        <img className="d-block mx-auto mb-3" src="assets/img/car-finder/icons/sport.svg" width="160" alt="Sport Coupe" />
        <a className="nav-link-light stretched-link fw-bold" href="#">Sport Coupe</a>
      </div>
    </div>
    {/* Item */}
    <div className="col">
      <div className="card card-body card-light card-hover bg-transparent border-0 px-0 pt-0 text-center">
        <img className="d-block mx-auto mb-3" src="assets/img/car-finder/icons/compact.svg" width="160" alt="Compact" />
        <a className="nav-link-light stretched-link fw-bold" href="#">Compact</a>
      </div>
    </div>
    {/* Item */}
    <div className="col">
      <div className="card card-body card-light card-hover bg-transparent border-0 px-0 pt-0 text-center">
        <img className="d-block mx-auto mb-3" src="assets/img/car-finder/icons/convertible.svg" width="160" alt="Convertible" />
        <a className="nav-link-light stretched-link fw-bold" href="#">Convertible</a>
      </div>
    </div>
    {/* Item */}
    <div className="col">
      <div className="card card-body card-light card-hover bg-transparent border-0 px-0 pt-0 text-center">
        <img className="d-block mx-auto mb-3" src="assets/img/car-finder/icons/mpv.svg" width="160" alt="Family MPV" />
        <a className="nav-link-light stretched-link fw-bold" href="#">Family MPV</a>
      </div>
    </div>
  </div>
</section>

    )
};
export default BodyType;