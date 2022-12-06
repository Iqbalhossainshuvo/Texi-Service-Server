import React from 'react';

const Blog = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">

                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        Your Question
                    </h2>
                  
                </div>
            </div>
            <div className="max-w-screen-xl sm:mx-auto">
                <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
                    <div className="space-y-8">
                        <div>
                            <p className="mb-4 text-xl font-medium">
                                Difference between SQL and NoSQL
                            </p>
                            <p className="text-gray-700">
                                SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL

                            </p>
                        </div>
                        <div>
                            <p className="mb-4 text-xl font-medium">
                                What is JWT, and how does it work?
                            </p>
                            <p className="text-gray-700">
                                JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP)

                            </p>
                        </div>
                     
                    </div>
                    <div className="space-y-8">
                        <div>
                            <p className="mb-4 text-xl font-medium">
                            What is the difference between javascript and NodeJS?
                            </p>
                            <p className="text-gray-700">
                            JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language
                               
                            </p>
                        </div>
                        <div>
                            <p className="mb-4 text-xl font-medium">
                            How does NodeJS handle multiple requests at the same time?
                            </p>
                            <p className="text-gray-700">
                            NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them
                            </p>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;