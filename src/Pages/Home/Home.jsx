import React from 'react';
import Bannar from './Bannar/Bannar';
import AboutUs from './AboutUs/AboutUs';
import Service from './Service/Service';
import Product from './Product/Product';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <AboutUs></AboutUs>
            <Service></Service>
            <Product></Product>
        </div>
    );
};

export default Home;