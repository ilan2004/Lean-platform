import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';

const WithoutLogin = () => {
    return (
        <>
            <Navbar />
            <div className="">
                <Hero />
            </div>
        </>
    );
}

export default WithoutLogin;

