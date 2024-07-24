import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-light text-center text-lg-start">
            <div className="container p-4">
                <div className="text-center p-3">
                    &copy; {new Date().getFullYear()} {t('FooterText')}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
