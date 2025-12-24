import React from 'react';
import HeroSection from '../_components/HeroSection';
import AboutUs from './_components/AboutUs';
import OtherAboutUs from './_components/OtherAboutUs';

const AbouUspage = () => {
    return (
        <div>
            <HeroSection title="About Us" subtitle="About Us" />
            <AboutUs/>
            <OtherAboutUs/>
        </div>
    );
};

export default AbouUspage;