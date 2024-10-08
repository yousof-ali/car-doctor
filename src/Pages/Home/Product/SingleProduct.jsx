import React from "react";
import { FaStar } from "react-icons/fa6";


const SingleProduct = ({ product }) => {
    console.log(product);
  return (
    <div className="card p-4 rounded-xl border ">
      <div className="px-10 flex-grow rounded-xl bg-base-200 pt-10">
        <img
          src={product.img}
          alt="Product"
          className="rounded-xl "
        />
      </div>
      <div className="flex flex-col space-y-2 py-6 items-center text-center">
        <div className="flex text-xl gap-1 text-[#FF912C]">
            <span><FaStar />
            </span>
            <span><FaStar />
            </span>
            <span><FaStar />
            </span>
            <span><FaStar />
            </span>
            <span><FaStar />
            </span>
        </div>
        <h2 className="card-title">{product.title}</h2>
        <p className="text-[#FF3811] font-bold">{product.price}</p>
        
      </div>
    </div>
  );
};

export default SingleProduct;
