import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import CommonButton from '../../../Component/CommonButton'


const SingleService = ({ service }) => {
    const {_id,img,price,title
    } = service
  return (
    <div className="card bg-base-100 p-4 border">
      <div className="flex-grow">
        <img
          src={img}
          alt=""
          className="rounded-xl"
        />
      </div>
      <div className="mt-4">
        <h2 className="card-title">{title}</h2>
        <p className="text-[#FF3811] mt-4 font-bold ">Price : {price}</p>
        <p></p>
        <div className="flex justify-between my-4">
        <Link to={`/details/${_id}`}> <CommonButton label={"Details"}/>
        </Link>
          <Link to={`/book-now/${_id}`} className="btn rounded-full font-bold  text-[#FF3811] border-1 "><FaArrowRight />
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default SingleService;
