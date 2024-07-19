import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { useTranslation } from 'react-i18next';

const Details = () => {
    const { t } = useTranslation();

    return (
        <div>
            <Navbar />
            <section className="container pt-5">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card bg-light border-0">
                            <div className="card-body">
                                <h3 className="card-title">{t('DetailsTitle')}</h3>
                                <p>{t('DetailsDescription')}</p>
                                <ul>
                                    <li>{t('Detail1')}</li>
                                    <li>{t('Detail2')}</li>
                                    <li>{t('Detail3')}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Details;
