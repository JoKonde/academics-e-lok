import React from 'react';
import SignUpModal from './SignUpModal';
import Navbar from './Navbar';
import Hero from './Hero';
import BodyType from './BodyType';
import SignInModal from './SignInModal';

function Corps(){
    return (
        <main className="page-wrapper">
                <SignUpModal />
                <Navbar />
                <Hero />
                <BodyType/>
                <SignInModal />
        </main>
    );
}export default Corps;