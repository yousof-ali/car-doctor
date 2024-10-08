import React from 'react';
import CommonButton from '../../Component/CommonButton';

const SingleBooking = ({booking,data,setData}) => {

    const handleDelete = (id) => {
        const proceed = confirm("Are you sure ?");
        if(proceed){
            fetch(`http://localhost:5000/delete/${id}`,{
                method:"DELETE"
            })
            .then(res => res.json())
            .then(result => {
                if(result.deletedCount > 0){
                    alert("deleted!")
                    const newData = data.filter(single => single._id !== id);
                    setData(newData);
                }
                
            }) 

        }else{
            console.log("cancel");
        }
    }
    
    const handleBookingConfirm = (id) => {
        console.log("hello")
        fetch(`http://localhost:5000/update/${id}`,{
            method:'PATCH',
            headers:{
                'content-type':"application/json"
            },
            body:JSON.stringify({status:"Done"})
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
            if(result.modifiedCount > 0){
                const remaining = data.filter(single => single._id !== id) 
                const updated = data.find(single => single._id === id)
                updated.status = "Done"
                const newData = [updated, ...remaining];
                setData(newData);
            }
        })
    }

    return (
      <div className='rounded flex bg-base-100 justify-between items-center border my-4 py-4 px-4'>
        <div className='flex items-center gap-4  '>
            <button onClick={() => handleDelete(booking._id)} className='btn '>X</button>
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
            {
                booking.status?<CommonButton  disabled label={booking.status}></CommonButton>:
                <CommonButton onClick={() => handleBookingConfirm(booking._id)} label={"Pending"}></CommonButton>
            }
        </div>
      </div>
    );
};

export default SingleBooking;