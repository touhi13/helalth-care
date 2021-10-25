import React from 'react';
import Banner from './Banner/Banner';
import FAQ from './FAQ/FAQ';
import Imunisation from './Imunisation/Imunisation';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services headingText="Our Services"></Services>
            <Imunisation></Imunisation>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;