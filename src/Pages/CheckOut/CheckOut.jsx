import React, { useContext } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import CommonButton from "../../Component/CommonButton";
import { AuthContext } from "../../Providers/AuthProvider";

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
    <div className="hero bg-base-200 min-h-screen">
      <div className="card  w-full px-8  shrink-0 mx-2">
        <form onSubmit={handleCheckOut} className="">
            <div>
                <h2 className="text-center py-4 text-2xl font-bold">Book services</h2>
            </div>
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
