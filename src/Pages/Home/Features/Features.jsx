import React from 'react';
import icon1 from "../../../assets/icons/check.svg"
import icon2 from "../../../assets/icons/deliveryt.svg"
import icon3 from "../../../assets/icons/group.svg"
import icon4 from "../../../assets/icons/person.svg"
import icon5 from "../../../assets/icons/Wrench.svg"

const Features = () => {
    return (
        <div className='lg:py-10'>
            <div className='text-center px-2'>
            <p className='text-[#FF3811] text-lg font-bold py-4'>Core Features</p>
            <h1 className="text-5xl  font-bold">Why Choose Us</h1>
            <p className='my-6 mx-auto  w-full md:w-1/2'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
            </div>

            <div className='grid mx-2 grid-cols-3 my-12 mt-8 lg:gap-10 gap-6 justify-center lg:flex  lg:justify-center  items-center'>
                <div className='rounded-xl border-[#FF3811] max-w-44 p-4 text-center border'>
                    <div className='flex justify-center '>
                    <img src={icon4} alt="" />
                    </div>
                    <p className='font-extrabold mt-2'>Expert Team</p>

                </div>
                <div className='rounded-xl border-[#FF3811] max-w-44  p-4 text-center border'>
                    <div className='flex justify-center '>
                    <img src={icon3} alt="" />
                    </div>
                    <p className='font-extrabold mt-2'>24/7 Support</p>

                </div>
                <div className='rounded-xl border-[#FF3811] p-4 max-w-44 text-center border'>
                    <div className='flex justify-center '>
                    <img src={icon5} alt="" />
                    </div>
                    <p className='font-extrabold mt-2'>Best Equipment</p>

                </div>
                <div className='rounded-xl border-[#FF3811] p-4 max-w-44 text-center border'>
                    <div className='flex justify-center '>
                    <img src={icon1} alt="" />
                    </div>
                    <p className='font-extrabold mt-2'>100% Guranty</p>

                </div>
                <div className='rounded-xl border-[#FF3811] p-4 max-w-44 text-center border'>
                    <div className='flex justify-center '>
                    <img src={icon2} alt="" />
                    </div>
                    <p className='font-extrabold mt-2'>Timely Delivery</p>

                </div>
            </div>
        </div>
    );
};

export default Features;