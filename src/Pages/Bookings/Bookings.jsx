import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import SingleBooking from './SingleBooking';

const Bookings = () => {
    const {user} = useContext(AuthContext);
    const url = `http://localhost:5000/bookings?email=${user?.email}`
     
    const [data,setData] = useState([]);

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(services => {
            setData(services)
        })
    },[])
    console.log(data);

    
    return (
        <div className='h-screen '>
           {
               data.map(booking => <SingleBooking key={booking._id} data={data} setData={setData} booking={booking}></SingleBooking>)
           }
        </div>
    );
};

export default Bookings;