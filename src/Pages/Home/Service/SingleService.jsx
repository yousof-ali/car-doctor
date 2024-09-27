import React from "react";
import { FaArrowRight } from "react-icons/fa6";


const SingleService = ({ service }) => {
    const {img,price,title
    } = service
  return (
    <div className="card bg-base-100 p-4 border">
      <figure className="">
        <img
          src={img}
          alt=""
          className="rounded-xl"
        />
      </figure>
      <div className="mt-4">
        <h2 className="card-title">{title}</h2>
        <p className="text-[#FF3811] mt-4 font-bold ">Price : {price}</p>
        <p></p>
        <div className="card-actions  flex justify-end">
          <button className="btn rounded-full font-bold  text-[#FF3811] border-1 "><FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
