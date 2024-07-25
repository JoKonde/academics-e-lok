import React from 'react';
import DemoSwitcher from './DemoSwitcher';
import SignInModal from './SignInModal';

/*import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';*/

const Home = () => {
    //const { t } = useTranslation();

    return (
        <div>
            <DemoSwitcher/>
            <SignInModal />
        </div>
    );
}

export default Home;
