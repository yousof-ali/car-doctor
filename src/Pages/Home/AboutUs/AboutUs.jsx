import React from 'react';
import person from "../../../assets/images/about_us/person.jpg"
import parts from "../../../assets/images/about_us/parts.jpg"
import CommonButton from '../../../Component/CommonButton';

const AboutUs = () => {
    return (
        <div className="hero bg-base-100 min-h-screen">
  <div className="hero-content  flex gap-8 flex-col lg:flex-row-reverse">
    <div className="text-center  flex-1 lg:text-left">
        <p className='text-[#FF3811] text-lg font-bold py-4'>About Us</p>
      <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
      <p className="py-6">
      There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
      </p>
      <p>
      the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
      </p>
      <CommonButton className={"mt-6"} label={"Get More Info"}></CommonButton>
    </div>
    <div className="card flex-1  shrink-0 ">
      <div className='w-4/5  relative '>
        <img className='rounded ' src={person} alt="" />

        <img className='absolute border-8 rounded w-2/3 -bottom-20 -right-20' src={parts} alt="" />
      </div>
    </div>
  </div>
</div>
    );
};

export default AboutUs;