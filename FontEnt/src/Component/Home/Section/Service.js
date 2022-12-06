import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ServiceData from './ServiceData';

const Service = () => {
    const [AllData, setAllData] = useState();
    console.log(AllData);

    useEffect(() => {
        fetch('https://texicarservice.vercel.app/product')
            .then(res => res.json())
            .then(data => setAllData(data))
    }, [])




    return (
        <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="">

                <h2 className="max-w-lg mb-6 font-sans text-center text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">

                    OUR SERVICE
                </h2>
                <div className='col-span-2 grid lg:grid-cols-3 gap-10  '>
                    {
                        AllData?.map(data => <ServiceData key={data.id} data={data}></ServiceData>)
                    }
                </div>
                <div class="grid mt-10 place-items-center">
                    <button class="text-center text-green-400 font-bold rounded py-2 w-2/12 focus:outline-none hover:bg-purple-700 border-2 border-indigo-400"><Link to='/allservice'>See All</Link> </button>

                 
                </div>
            </div>


        </div>

    );
};

export default Service;