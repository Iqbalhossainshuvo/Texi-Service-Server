import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllServiceData from './AllServiceData';
import { Link } from 'react-router-dom';


const AllService = () => {
    const [products, allProduct] = useState();

    useEffect( ()=>{
        const url = `http://localhost:5000/allservice`;
      
        fetch(url)
            .then(res => res.json())
            .then(data => allProduct(data))

    },[])



    return (
        <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="">

            <h2 className="max-w-lg mb-6 font-sans text-center text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">

                OUR SERVICE
            </h2>
            <div className='col-span-2 grid lg:grid-cols-3 gap-10  '>
                {
                    products?.map(data => <AllServiceData key={data._id} data={data}></AllServiceData>)
                }
            </div>
           
         
        </div>


    </div>
    );
};

export default AllService;