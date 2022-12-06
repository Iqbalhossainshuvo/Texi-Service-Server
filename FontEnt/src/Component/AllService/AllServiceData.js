import React from 'react';
import { Link } from 'react-router-dom';

const AllServiceData = ({data}) => {
    const { _id, price, img, title, description ,review} = data;
    return (
        <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
            <div className="relative w-full h-48">
                <img
                    className='w-full'
                    src={img}
                    alt="Plan"
                />
            </div>
            <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
                <div>
                    <div className="text-lg font-semibold">{title}</div>
                    <h5>description :</h5>
                    <p className="text-sm text-gray-900">
                        {description}
                    </p>
                    <br />
                    <br />
                    <h5>Review :</h5>
                    {review}
                    <div className="mt-1 mb-4 mr-1 text-4xl font-bold sm:text-5xl">
                        $ {price}
                    </div>
                </div>
                <Link
                    to={`/services/${_id}`}
                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-green-400 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                >
                    service details
                </Link>
               
            </div>
        </div>
    );
};

export default AllServiceData;