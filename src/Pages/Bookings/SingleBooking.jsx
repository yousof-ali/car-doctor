import React from 'react';
import CommonButton from '../../Component/CommonButton';

const SingleBooking = ({booking,data,setData}) => {
    return (
      <div className='rounded flex justify-between items-center border my-4 py-4 px-4'>
        <div className='flex items-center gap-4  '>
            <button className='btn '>X</button>
            <img className='w-28 rounded' src={booking.img} alt="" />
            <h2 className='font-bold'>{booking.services}</h2>
        </div>
        <div className='hidden md:flex'>
            {booking.amout}
        </div>
        <div className='hidden md:flex'>
            {booking.date}
        </div>
        <div>
            <CommonButton label={"Pending"}></CommonButton>
        </div>
      </div>
    );
};

export default SingleBooking;