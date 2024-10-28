import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLoaderData } from 'react-router-dom';
import serv from "../../assets/images/checkout/checkout.png"
import logo from "../../assets/logo.svg"
import CommonButton from '../../Component/CommonButton';
import { FaArrowRightLong } from "react-icons/fa6";


const Details = () => {
    const data = useLoaderData();
    const [alldata,setAlldata] = useState([]);
    useEffect(() => {
        fetch('https://car-doctor-server-delta-nine-48.vercel.app/services')
        .then(res => res.json())
        .then(data => {
            setAlldata(data)
            

        })
        
    },[])

    return (
        <div>
            <div className="relative">
        <img className="w-full" src={serv} alt="" />
        <div className="w-full flex items-center  rounded-xl h-full absolute top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <h2 className="text-2xl md:text-5xl ml-4 md:ml-16  font-bold text-white mb-8">
          Service Details
          </h2>
        </div>
        <div className="absolute bottom-0  w-full flex justify-center">
            <div className="text-center px-2 py-2 md:py-4 text-white bg-[#FF3811]">
            <p className="font-semibold">Home/Service Details</p>
            </div>
        </div>

      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 mx-2 mx:mx-0 md:gap-4 my-12'>
        <div className='col-span-2'>
            <img src={data.img} className='rounded max-h-[400px] w-full' alt="" />
            <h2 className='text-3xl font-bold my-4'>{data.title}</h2>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
            <div className='grid grid-cols-1 my-6 md:grid-cols-2 gap-4'>
                {
                    data?.facility.map((single,indx) => <div key={indx} className='p-4 border-t-2 border-[#FF3811] bg-slate-200 rounded'>
                        <h2 className='font-bold text-gray-600 text-xl mb-2'>{single.name}</h2>
                        <p>{single.details}</p>
                    </div>)
                }
            </div>
            <h2 className='text-3xl font-bold my-4'>3 Simple Steps to Process</h2>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
            <div className='flex flex-col md:flex-row gap-3 my-6'>
            <div className='text-center p-6 border rounded flex flex-col justify-center items-center'>
                <div className='text-xl border-8 border-[#e9a99c] flex justify-center items-center w-16 h-16 rounded-full font-bold bg-[#FF3811] text-white'>
                    <h1 >01</h1>
                </div>
                <div>
                    <h2 className='text-2xl mt-2 font-bold'>Step One</h2>
                    <p className='mt-4'>It uses a dictionary of over 200 .</p>
                </div>
            </div>
            <div className='text-center p-6 border rounded flex flex-col justify-center items-center'>
                <div className='text-xl border-8 border-[#e9a99c] flex justify-center items-center w-16 h-16 rounded-full font-bold bg-[#FF3811] text-white'>
                    <h1 >02</h1>
                </div>
                <div>
                    <h2 className='text-2xl mt-2 font-bold'>Step Two</h2>
                    <p className='mt-4'>It uses a dictionary of over 200 .</p>
                </div>
            </div>
            <div className='text-center p-6 border rounded flex flex-col justify-center items-center'>
                <div className='text-xl border-8 border-[#e9a99c] flex justify-center items-center w-16 h-16 rounded-full font-bold bg-[#FF3811] text-white'>
                    <h1 >03</h1>
                </div>
                <div>
                    <h2 className='text-2xl mt-2 font-bold'>Step Three</h2>
                    <p className='mt-4'>It uses a dictionary of over 200 .</p>
                </div>
            </div>
            </div>
        </div>
        <div className='col-span-1 mx-auto'>
            <div className='p-4  rounded bg-base-200 space-y-4'>
                <h2 className='text-2xl font-bold'>Services</h2>
                {
                    alldata?.map(single => <NavLink to={`/details/${single._id}`} className={`font-bold ${data.title === single.title?'bg-[#FF3811] text-white':'bg-base-100'} rounded justify-between items-center flex p-2`} key={single._id}>{single.title} <FaArrowRightLong /></NavLink>)
                }
            </div>

            <div className='bg-black px-6 py-12 mt-10 rounded'>
               <div>
                <div className='flex justify-center '>
                <img className='w-24' src={logo} alt="" />
                </div>
                <h2 className='text-xl my-4 text-center text-white font-semibold'>Need Help? We Are Here
                To Help You</h2>
               </div>
               <div className='bg-base-100 rounded relative text-center p-4'>
                    <h2 className='font-bold text-xl'><span className='text-[#FF3811]'>Car Doctor</span> Special</h2>
                    <p className='font-bold my-2 mb-4'><span className='text-gray-500 '>save up to</span> <span className='text-[#FF3811]'>60% off</span></p>
                    <div className='absolute -bottom-6 right-28'>
                    <CommonButton label={"Get A Quote"}></CommonButton>
                    </div>
               </div>
            </div>
            <div className='mt-10'>
                <h2 className='text-4xl mb-4 font-bold'>Price ${data.price}</h2>
                <Link to={`/book-now/${data._id}`}><CommonButton  className={'w-full'} label={"Proceed Checkout"}></CommonButton></Link>
            </div>
            
        </div>

      </div>
        </div>
    );
};

export default Details;