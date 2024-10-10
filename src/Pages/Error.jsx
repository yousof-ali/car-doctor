import React from 'react';
import error from '../../src/assets/images/testimonial/error.png'
import NavBar from './Shared/NavBar/NavBar';

const Error = () => {
    return (
        <div>
            <NavBar></NavBar>
            <img className='mx-auto mt-6 md:mt-16' src={error} alt="" />
        </div>
    );
};

export default Error;