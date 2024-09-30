import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CommonButton from "../../Component/CommonButton";

const CheckOut = () => {
  const { id } = useParams();
  const service = useLoaderData();
  const {_id,} = service
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card  w-full px-8  shrink-0 mx-2">
        <form className="">
            <div>
                <h2 className="text-center py-4 text-2xl font-bold">Book services</h2>
            </div>
          <div className="md:flex gap-6">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input
                type="text"
                placeholder="Frist Name"
                className="input input-bordered"
                name="fristName"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Last Name</span>
              </label>
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="md:flex gap-6">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Your Phone</span>
              </label>
              <input
                type="text"
                placeholder=" Your Phone"
                className="input input-bordered"
                name="phone"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="mt-8">
            <textarea className="w-full p-2 rounded" rows={5} name="" id=""></textarea>
          </div>
          <div className="form-control  w-full md:w-1/2 mx-auto mt-6">
            <CommonButton label={"Order Confirm"} className="btn btn-primary"> </CommonButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
