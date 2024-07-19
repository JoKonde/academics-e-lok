import React from 'react';

import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Home = () => {
    const { t } = useTranslation();

    return (
        <div>
            <Navbar />
            <section className="container pt-5">
                <div className="row">
                    <div className="col-lg-9">
                        <div className="card bg-light border-0">
                            <div className="card-body">
                                <h3 className="card-title">{t('CarDetails')}</h3>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="card">
                                            <div className="card-body">
                                                <h4 className="card-title">{t('CarFeatures')}</h4>
                                                <ul className="list-unstyled mb-0">
                                                    <li><i className="fi-check"></i> {t('Feature1')}</li>
                                                    <li><i className="fi-check"></i> {t('Feature2')}</li>
                                                    <li><i className="fi-check"></i> {t('Feature3')}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card">
                                            <div className="card-body">
                                                <h4 className="card-title">{t('CarSpecifications')}</h4>
                                                <ul className="list-unstyled mb-0">
                                                    <li><i className="fi-check"></i> {t('Specification1')}</li>
                                                    <li><i className="fi-check"></i> {t('Specification2')}</li>
                                                    <li><i className="fi-check"></i> {t('Specification3')}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Link to="/details" className="btn btn-primary mt-3">{t('ViewDetails')}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <a className="btn-scroll-top" href="#top" data-scroll><span className="btn-scroll-top-tooltip text-muted fs-sm me-2">Top</span><i className="btn-scroll-top-icon fi-chevron-up">   </i></a>
        </div>
    );
}

export default Home;
