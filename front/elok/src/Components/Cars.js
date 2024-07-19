import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Cars = () => {
    const { t } = useTranslation();

    return (
        <div>
            <Navbar />
            <section className="container pt-5">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card bg-light border-0">
                            <div className="card-body">
                                <h3 className="card-title">{t('CarsTitle')}</h3>
                                <p>{t('CarsDescription')}</p>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="card mb-4">
                                            <img src="car1.jpg" className="card-img-top" alt="Car 1" />
                                            <div className="card-body">
                                                <h5 className="card-title">{t('Car1')}</h5>
                                                <p className="card-text">{t('Car1Description')}</p>
                                                <Link to="/details" className="btn btn-primary">{t('ViewDetails')}</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card mb-4">
                                            <img src="car2.jpg" className="card-img-top" alt="Car 2" />
                                            <div className="card-body">
                                                <h5 className="card-title">{t('Car2')}</h5>
                                                <p className="card-text">{t('Car2Description')}</p>
                                                <Link to="/details" className="btn btn-primary">{t('ViewDetails')}</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card mb-4">
                                            <img src="car3.jpg" className="card-img-top" alt="Car 3" />
                                            <div className="card-body">
                                                <h5 className="card-title">{t('Car3')}</h5>
                                                <p className="card-text">{t('Car3Description')}</p>
                                                <Link to="/details" className="btn btn-primary">{t('ViewDetails')}</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Cars;
