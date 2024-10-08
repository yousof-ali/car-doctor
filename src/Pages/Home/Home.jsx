import React from 'react';
import Bannar from './Bannar/Bannar';
import AboutUs from './AboutUs/AboutUs';
import Service from './Service/Service';
import Product from './Product/Product';
import Team from './Team/Team';
import Features from './Features/Features';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <AboutUs></AboutUs>
            <Service></Service>
            <Product></Product>
            <Team></Team>
            <Features></Features>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;