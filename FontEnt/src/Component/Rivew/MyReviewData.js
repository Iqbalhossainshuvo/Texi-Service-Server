import React from 'react';

const MyReviewData = ({data}) => {
    const { _id, img, name, review} = data;

    return (
        <div className="p-8 bg-white border rounded shadow-sm">
        
        <a
            href="/"
            aria-label="Article"
            title="Jingle Bells"
            className="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
        >
            {name}
        </a>
        <p className="mb-5 text-gray-700">
        {review}
        </p>
        <div className="flex items-center">
            <a href="/" aria-label="Author" title="Author" className="mr-3">
                <img
                    src={img}
                    alt="avatar"
                    className="object-cover w-10 h-10 rounded-full shadow-sm"
                />
            </a>
            <div>
                <a
                    href="/"
                    aria-label="Author"
                    title="Author"
                    className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                   {name}
                </a>
                <p className="text-sm font-medium leading-4 text-gray-600">
                    Author
                </p>
            </div>
        </div>
    </div>
    );
};

export default MyReviewData;