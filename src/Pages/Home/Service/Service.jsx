import React, { useEffect, useState } from 'react';
import SingleService from './SingleService';
import { MdDateRange } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineMessage } from "react-icons/ai";




const Service = () => {
    const [service,setService] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => {
            setService(data);
        })
        .catch((e) => {
            console.log(e.message);
        })
    },[])
    console.log(service)
    return (
        <div className=' md:pt-16 pb-6 bg-base-100 lg:pt-0 mx-2'>
            <div className='text-center  px-2'>
            <p className='text-[#FF3811] text-lg font-bold py-4'>Service</p>
            <h1 className="text-5xl font-bold">Our Service Area</h1>
            <p className='my-6 mx-auto w-full md:w-1/2'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
               {
                service.map(service => <SingleService key={service._id} service={service} ></SingleService> )
               }
            </div>
            <div className='bg-black my-12 grid grid-cols-2 md:grid-cols-3  rounded px-2 gap-8  p-8 '>
                   <div className='flex justify-center items-center text-white gap-2'>
                   <MdDateRange className='text-3xl' />
                   <div>
                    <p className='text-sm'>We are open monday-friday</p>
                    <p className='text-xl  font-bold'>7:00 am - 9:00 pm</p>
                   </div>
                   </div>
                   <div className='flex justify-center items-center text-white gap-2'>
                   <AiOutlineMessage className='text-3xl' />
                   <div>
                    <p className='text-sm'>Have a question?</p>
                    <p className='text-xl  font-bold'>+2546 251 2658</p>
                   </div>
                   </div>
                   <div className='flex justify-center items-center text-white gap-2'>
                   <FaLocationDot 
                   className='text-3xl' />
                   <div>
                    <p className='text-sm'>Need a repair? our address</p>
                    <p className='text-xl  font-bold'>Liza Street, New York</p>
                   </div>
                   </div>
            </div>
        </div>
    );
};

export default Service;