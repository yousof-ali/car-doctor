import React from "react";
import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'

const Bannar = () => {
  return (
    <div className="carousel w-full md:max-h-[80vh] ">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src={img1}
          className="w-full"
        />
        <div className="absolute h-full w-full flex items-center  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="text-white space-y-2 md:space-y-6 w-3/4 md:w-1/2 ml-2  md:ml-8 ">
            <h2 className="md:text-5xl font-bold text-2xl">Affordable Price For Car Servicing</h2>
            <p className="text-sm md:text-base">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className="flex gap-2 md:gap-4">
                <button className="bg-[#FF3811] btn border-none text-white hover:bg-[rgb(255,100,17)]">Discover More</button>
                <button>
                <button className="btn hover:bg-opacity-30 text-white btn-outline">Latest Project</button>
                    
                </button>
            </div>
          </div>
        </div>
        <div className="absolute  md:right-10 right-2 gap-2 md:gap-4 -bottom-5 md:bottom-0 flex -translate-y-1/2 transform justify-end">
          <a href="#slide4" className="btn hover:bg-opacity-40 border-none bg-opacity-50 btn-circle text-white">
            ❮
          </a>
          <a href="#slide2" className="btn hover:bg-[rgb(255,100,17)] border-none bg-[#FF3811] btn-circle text-white">
            ❯
          </a>
        </div>
      </div>
      {/* 2 */}
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src={img2}
          className="w-full"
        />
        <div className="absolute h-full w-full flex items-center  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="text-white space-y-2 md:space-y-6 w-3/4 md:w-1/2 ml-2  md:ml-8 ">
            <h2 className="md:text-5xl font-bold text-2xl">Affordable Price For Car Servicing</h2>
            <p className="text-sm md:text-base">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className="flex gap-2 md:gap-4">
                <button className="bg-[#FF3811] btn border-none text-white hover:bg-[rgb(255,100,17)]">Discover More</button>
                <button>
                <button className="btn hover:bg-opacity-30 text-white btn-outline">Latest Project</button>
                    
                </button>
            </div>
          </div>
        </div>
        <div className="absolute  md:right-10 right-2 gap-2 md:gap-4 -bottom-5 md:bottom-0 flex -translate-y-1/2 transform justify-end">
          <a href="#slide1" className="btn hover:bg-opacity-40 border-none bg-opacity-50 btn-circle text-white">
            ❮
          </a>
          <a href="#slide3" className="btn hover:bg-[rgb(255,100,17)] border-none bg-[#FF3811] btn-circle text-white">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src={img4}
          className="w-full"
        />
        <div className="absolute h-full w-full flex items-center  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="text-white space-y-2 md:space-y-6 w-3/4 md:w-1/2 ml-2  md:ml-8 ">
            <h2 className="md:text-5xl font-bold text-2xl">Affordable Price For Car Servicing</h2>
            <p className="text-sm md:text-base">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className="flex gap-2 md:gap-4">
                <button className="bg-[#FF3811] btn border-none text-white hover:bg-[rgb(255,100,17)]">Discover More</button>
                <button>
                <button className="btn hover:bg-opacity-30 text-white btn-outline">Latest Project</button>
                    
                </button>
            </div>
          </div>
        </div>
        <div className="absolute  md:right-10 right-2 gap-2 md:gap-4 -bottom-5 md:bottom-0 flex -translate-y-1/2 transform justify-end">
          <a href="#slide2" className="btn hover:bg-opacity-40 border-none bg-opacity-50 btn-circle text-white">
            ❮
          </a>
          <a href="#slide4" className="btn hover:bg-[rgb(255,100,17)] border-none bg-[#FF3811] btn-circle text-white">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src={img5}
          className="w-full"
        />
        <div className="absolute h-full w-full flex items-center  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="text-white space-y-2 md:space-y-6 w-3/4 md:w-1/2 ml-2  md:ml-8 ">
            <h2 className="md:text-5xl font-bold text-2xl">Affordable Price For Car Servicing</h2>
            <p className="text-sm md:text-base">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className="flex gap-2 md:gap-4">
                <button className="bg-[#FF3811] btn border-none text-white hover:bg-[rgb(255,100,17)]">Discover More</button>
                <button>
                <button className="btn hover:bg-opacity-30 text-white btn-outline">Latest Project</button>
                    
                </button>
            </div>
          </div>
        </div>
        <div className="absolute  md:right-10 right-2 gap-2 md:gap-4 -bottom-5 md:bottom-0 flex -translate-y-1/2 transform justify-end">
          <a href="#slide3" className="btn hover:bg-opacity-40 border-none bg-opacity-50 btn-circle text-white">
            ❮
          </a>
          <a href="#slide1" className="btn hover:bg-[rgb(255,100,17)] border-none bg-[#FF3811] btn-circle text-white">
            ❯
          </a>
        </div>
      </div>


      
    </div>
  );
};

export default Bannar;
