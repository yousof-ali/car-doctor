import React, { useEffect, useState } from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import CommonButton from "../../../Component/CommonButton"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";





const Team = () => {
  const [team,setTeam] = useState([]);
  useEffect(() => {
    fetch('/team.json')
    .then(res => res.json())
    .then(data => {
      setTeam(data);
    })
  },[])
  
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
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
    <div className="bg-gradient-to-br from-gray-600 to-[#BD4697] py-6 my-8 rounded-md">
      <div className='text-center  px-2'>
            <p className='text-[#FF3811] text-lg font-bold py-4'>Team</p>
            <h1 className="text-5xl text-white font-bold">Meet Our Team</h1>
            <p className='my-6 mx-auto text-gray-200 w-full md:w-1/2'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
      <div className="mt-10 mx-10 pb-8 slider-container">
      <Slider {...settings}>
        {
          team.map(single => 
            <div key={single.id} className="bg-white border  rounded-xl p-6">
              <div>
                <img className="rounded-xl" src={single.img} alt="" />
              </div>
              <div className=" text-center ">
                <p className="font-semibold mt-2 text-xl text-gray-500">{single.name}</p>
                <h2 className="text-3xl font-semibold">{single.title}</h2>
                <p className="font-semibold text-xl text-gray-500">{single.expertise}</p>
                <div className="flex text-white justify-center gap-2 mt-2 text-xl">
                  <span className="p-1 bg-[#395185] rounded-full"><Link><FaFacebookF/></Link></span>
                  <span className="p-1 bg-[#55ACEE] rounded-full"><Link><FaTwitter/></Link></span>
                  <span className="p-1 bg-[#0A66C2] rounded-full"><Link><FaLinkedinIn/></Link></span>
                  <span className="p-1  bg-gradient-to-br from-[#774ADF] via-[#9748BE] via-[#BD4697] via-[#E94369] via-[#EF545E]  to-[#F2C141] rounded-full"><Link><FaInstagram/></Link></span>
                </div>
                <CommonButton className={'mt-4'} label={"Read More"}></CommonButton>
              </div>
            </div>
          )
        }
        </Slider>

      </div>
    </div>
  );
};

export default Team;
