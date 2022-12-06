import React from 'react';
import img1 from '../../../asset/img1.jpeg'
import img2 from '../../../asset/img2.jpeg'
import img3 from '../../../asset/img3.jpeg'
import img4 from '../../../asset/img4.jpeg'

const SecondService = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
         
        MORE SERVICE
        </h2>
       
      </div>
      <div className="grid max-w-screen-lg gap-8 row-gap-5 mb-8 sm:grid-cols-2 lg:grid-cols-4 sm:mx-auto">
        <img
          className="object-cover w-full h-56 rounded shadow-lg"
          src={img1}
          alt=""
        />
        <img
          className="object-cover w-full h-56 rounded shadow-lg"
          src={img2}
          alt=""
        />
        <img
          className="object-cover w-full h-56 rounded shadow-lg"
          src={img3}
          alt=""
        />
        <img
          className="object-cover w-full h-56 rounded shadow-lg"
          src={img4}
          alt=""
        />
      </div>
    </div>
  );
};

export default SecondService;