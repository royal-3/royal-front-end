import React from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import Services from '../components/Services';
import HomeRecentWorks from '../components/HomeRecentWorks';
import Gallery from '../components/Gallery';

import FAQ from '../components/FAQ';
import ReviewSection from '../components/ReviewSection';

const Home = ({ onOpenConsultation }) => {
    return (
        <>
            <Hero onOpenConsultation={onOpenConsultation} />
            <AboutSection />
            <Services />
            <HomeRecentWorks />
            <Gallery />
            <ReviewSection />
            <FAQ />
        </>
    );
};

export default Home;
