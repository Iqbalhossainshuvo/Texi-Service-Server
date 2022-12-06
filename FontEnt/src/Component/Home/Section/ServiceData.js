import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const ServiceData = ({ data }) => {
    const { _id, price, img, title, description } = data;
    return (
        <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
            <div className="relative w-full h-48">
               <PhotoProvider>
                <PhotoView key={_id} src={img}>
                <img
                    className='w-full'
                    src={img}
                    alt="Plan"
                />
                </PhotoView>
                </PhotoProvider>
               
            </div>
            <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
                <div>
                    <div className="text-lg font-semibold">{title}</div>
                    <p className="text-sm text-gray-900">
                        {description.slice(0,150)}
                    </p>
                    <div className="mt-1 mb-4 mr-1 text-4xl font-bold sm:text-5xl">
                        $ {price}
                    </div>
                </div>
                <Link
                    to="/allservice"
                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-green-400 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                >
                    More Details
                </Link>
               
            </div>
        </div>
    );
};

export default ServiceData;