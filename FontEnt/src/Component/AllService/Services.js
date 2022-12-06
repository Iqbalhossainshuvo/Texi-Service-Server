import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import UserContext, { AuthContext } from '../../Context/UserContext';


const Services = () => {
    const { _id, name, review, title, price, description, img, } = useLoaderData();
    const { user } = UserContext(AuthContext)
    const navigate = useNavigate()
    const reviewHandle = (e) => {
        e.preventDefault();
           if(!user){
               toast.error('please login')
               navigate('/login');
               return;
           }
        const reviews = {
            name: e.target.name.value,
            review: e.target.review.value,
            img: e.target.img.value,

        };
        console.log(reviews);
        fetch("https://texicarservice.vercel.app/review", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(reviews)
        }).then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(data.message);
                } else {
                    toast.error(data.error);
                }
            })
            .catch(err => {
                toast.error(err.message);
            })

    }
    return (
        <div className='container mx-auto grid lg:grid-cols-3 mt-10 gap-10'>

            <div className='mx-8 w-full'>
                <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
                    <div className="relative w-full h-48">
                        <img
                            className='w-full'
                            src={img}
                            alt="Plan"
                        />
                    </div>
                    <div className="flex flex-col justify-between flex-grow  p-8 border border-t-0 rounded-b">
                        <div>
                            <h3>Name :</h3>
                            <div className="text-lg font-semibold">{name}</div>
                            <h3>Title :</h3>

                            <div className="text-lg font-semibold">{title}</div>
                            <p className="text-sm text-gray-900">
                                {description}
                            </p>
                            <div className="mt-1 mb-4 mr-1 text-4xl font-bold sm:text-5xl">
                                $ {price}
                            </div>
                        </div>


                    </div>
                </div>
            </div>


            <div className='col-span-2 grid lg:grid-cols-3 gap-10 mb-8 mx-4'>
                <div>
                    <h3>Review</h3>
                    <h1>{review}</h1>
                </div>
                <div>
                    <h3>Write Your Review</h3>

                    <form onSubmit={reviewHandle}>
                        <div className="flex items-center mb-5">
                            <label className="inline-block w-40 mr-6 text-right font-bold text-gray-600">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
                            />
                        </div>

                        <div className="flex items-center mb-10">
                            <label className="inline-block w-40 mr-6 text-right font-bold text-gray-600">
                                Reviwe
                            </label>
                            <input
                                type="text"
                                name="review"
                                placeholder="review"
                                className="flex-1 py-2 border-b-2 col-3 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
                            />
                        </div>
                        <div className="flex items-center mb-10">
                            <label className="inline-block w-40 mr-6 text-right font-bold text-gray-600">
                                Image
                            </label>
                            <input
                                type="text"
                                name="img"
                                placeholder="url"
                                className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
                            />
                        </div>

                        <div className="text-right">
                            <button className="py-3 px-8 bg-green-400 text-white font-bold">Add</button>
                        </div>
                    </form>

                </div>


            </div>


        </div>
    );
};

export default Services;