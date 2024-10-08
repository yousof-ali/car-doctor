import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import SingleBooking from "./SingleBooking";
import service from "../../assets/images/checkout/checkout.png";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((services) => {
        setData(services);
      });
  }, []);
  console.log(data);

  return (
    <div className="min-h-screen ">
      <div className="relative">
        <img className="w-full" src={service} alt="" />
        <div className="w-full flex items-center  rounded-xl h-full absolute top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="ml-4 md:ml-16">
            <h2 className="text-2xl md:text-5xl   font-bold text-white">
              Manage All Orders
            </h2>
            <p className="text-[#FF3811] mt-2 md:mt4 text-sm md:text-base">Home - Manage All Orders</p>
          </div>
        </div>
      </div>
      <div className="my-6 md:my-16">
        {data.map((booking) => (
          <SingleBooking
            key={booking._id}
            data={data}
            setData={setData}
            booking={booking}
          ></SingleBooking>
        ))}
      </div>
    </div>
  );
};

export default Bookings;
