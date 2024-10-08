import React, { useContext } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import CommonButton from "../../Component/CommonButton";
import { AuthContext } from "../../Providers/AuthProvider";
import serv from "../../assets/images/checkout/checkout.png";

const CheckOut = () => {
  const{user} = useContext(AuthContext);
  console.log(user);
  const service = useLoaderData();
  const {_id,price,title,img} = service
  const navigate = useNavigate();

  const handleCheckOut = e =>{
    e.preventDefault();
    const from = e.target 
    const name = from.name.value 
    const email = user?.email 
    const amout = from.amount.value 
    const date = from.date.value 

    const data = {name,email,amout:price,date,img,services_id:_id,services:title};
    console.log(data)

    fetch('http://localhost:5000/bookings',{
      method:"POST",
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result => {
      console.log(result);
      if(result.insertedId){
        navigate('/')
      }
    })
  }
  return (
    <div className=" min-h-screen">
      <div className="relative">
        <img className="w-full" src={serv} alt="" />
        <div className="w-full flex items-center  rounded-xl h-full absolute top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <h2 className="text-2xl md:text-5xl ml-4 md:ml-16  font-bold text-white">
            Add New Service
          </h2>
        </div>
        <div className="absolute bottom-0  w-full flex justify-center">
            <div className="w-40 text-center py-2 md:py-4 text-white bg-[#FF3811]">
            <p className="font-semibold">Home/Service</p>
            </div>
        </div>

      </div>
      <div className="bg-base-200 rounded my-4 py-6 md:my-16 max-w-full md:max-w-[80%] px-8  shrink-0 md:mx-auto mx-2">
        <form onSubmit={handleCheckOut} className="">
          <div className="md:flex gap-6">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text"> Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                name="name"
                defaultValue={user?.displayName}
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                placeholder="Date"
                name="date"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="md:flex gap-6">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Amount</span>
              </label>
              <input
                type="text"
                placeholder="Amount"
                defaultValue={'$ '+price}
                className="input input-bordered"
                name="amount"
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
                defaultValue={user?.email}
                required
              />
            </div>
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
