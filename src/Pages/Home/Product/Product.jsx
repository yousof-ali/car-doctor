import React, { useEffect, useState } from 'react';
import SingleProduct from './SingleProduct';

const Product = () => {
    const [product,setProduct] = useState([]);

    useEffect(() => {
        fetch('/product.json')
        .then(res => res.json())
        .then(data => {
            setProduct(data);
        })
    },[])
    return (
        <div className=' md:pt-16 pb-6 bg-base-100 lg:pt-0 mx-2'>
            <div className='text-center  px-2'>
            <p className='text-[#FF3811] text-lg font-bold py-4'>Popular Products</p>
            <h1 className="text-5xl font-bold">Browse Our Products</h1>
            <p className='my-6 mx-auto w-full md:w-1/2'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-4 md:gap-6  grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    product.map(single => <SingleProduct key={single.id} product={single}></SingleProduct>)
                }

            </div>
        </div>
    );
};

export default Product;