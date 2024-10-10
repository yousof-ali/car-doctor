import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa6";
import businessman from '../../../../src/assets/images/testimonial/busniess.jpg'
import engineer from '../../../../src/assets/images/testimonial/engineer.jpg'
import doctor from '../../../../src/assets/images/testimonial/doctor.jpg'
import quts from '../../../../src/assets/icons/quote.svg'


const Testimonial = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide:0
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className="bg-gradient-to-br py-6 from-red-300 to-[#73c1e6] ">
      <div className="text-center px-2">
        <p className="text-[#FF3811] text-lg font-bold py-4">Testimonial</p>
        <h1 className="text-5xl  font-bold">What Customer Says</h1>
        <p className="my-6 mx-auto  w-full md:w-1/2">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="py-4 mx-10">
      <Slider {...settings} >
        <div className="p-4 md:p-6  bg-base-200 rounded ">
            <div className="flex justify-between">
            <div className="flex  items-center gap-2 md:gap-4">
                <img className=" w-16 md:w-28 rounded-full" src={businessman} alt="" />
                <div>
                    <h2 className="md:text-2xl text-xl font-bold">Awlad Hossain</h2>
                    <p className="text-xl font-semibold text-gray-500">Businessman</p>
                </div>
                
                
            </div>
            <img className=" w-8 md:w-16 mt-8 " src={quts} alt="" />
            </div>
            <p className="my-4">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                </p>
                <div className="flex gap-2 text-xl text-[#FF912C]">
                    <span><FaStar /></span>
                    <span><FaStar /></span>
                    <span><FaStar /></span>
                    <span><FaStar /></span>
                    <span><FaStar /></span>
                </div>
        </div>
        <div className="p-4 md:p-6  bg-base-200 rounded ">
            <div className="flex justify-between">
            <div className="flex   items-center gap-2 md:gap-4">
                <img className=" w-16 md:w-28 rounded-full" src={doctor} alt="" />
                <div>
                    <h2 className="md:text-2xl text-xl font-bold">DR. Jarah</h2>
                    <p className="text-xl font-semibold text-gray-500">Doctor</p>
                </div>
                
                
            </div>
            <img className=" w-8 md:w-16 mt-8 " src={quts} alt="" />
            </div>
            <p className="my-4">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                </p>
                <div className="flex gap-2 text-xl text-[#FF912C]">
                    <span><FaStar /></span>
                    <span><FaStar /></span>
                    <span><FaStar /></span>
                    <span><FaStar /></span>
                    <span><FaStar /></span>
                </div>
        </div>
        <div className="p-4 md:p-6  bg-base-200 rounded ">
            <div className="flex justify-between">
            <div className="flex  items-center gap-2 md:gap-4">
                <img className=" w-16 md:w-28 rounded-full" src={engineer} alt="" />
                <div>
                    <h2 className="md:text-2xl text-xl font-bold">Rayhan</h2>
                    <p className="text-xl font-semibold text-gray-500">Engineer</p>
                </div>
                
                
            </div>
            <img className=" w-8 md:w-16 mt-8 " src={quts} alt="" />
            </div>
            <p className="my-4">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                </p>
                <div className="flex gap-2 text-xl text-[#FF912C]">
                    <span><FaStar /></span>
                    <span><FaStar /></span>
                    <span><FaStar /></span>
                    <span><FaStar /></span>
                    <span><FaStar /></span>
                </div>
        </div>
        
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
