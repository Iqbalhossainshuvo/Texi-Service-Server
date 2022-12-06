import React, { useEffect, useState } from 'react';
import MyReviewData from './MyReviewData';

const Rivew = () => {
    const [products, allProduct] = useState();

    useEffect( ()=>{
        const url = `https://texicarservice.vercel.app/allreview`;
      
        fetch(url)
            .then(res => res.json())
            .then(data => allProduct(data))

    },[])
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <h2 className=" max-w-lg text-center mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">

            Review
            </h2>
            <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
               
                 {
                    products?.map(data => <MyReviewData key={data._id} data={data}></MyReviewData>)
                } 
               
            </div>
        </div>
    );
};

export default Rivew;