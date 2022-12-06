import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../AllService/AddProduct";
import AllService from "../AllService/AllService";
import Services from "../AllService/Services";
import Blog from "../Blog/Blog";
import Home from "../Home/Home";
import Service from "../Home/Section/Service";
import Main from "../Main/Main";
import Login from "../Register/Login";
import Register from "../Register/Register";
import Rivew from "../Rivew/Rivew";
import PrivateRoute from "./PrivateRoute";




export const routes = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main> ,
        children: [
            {
                path:'/',
                element: <Home></Home> , 
                
            },
            {
                path:'/home',
                loader:()=>fetch('https://texicarservice.vercel.app/product'),
                element: <Home></Home> ,
                 
            },    
            {
                path:'/service',
                loader:()=>fetch('https://texicarservice.vercel.app/product'),
                element: <Service></Service> , 
                
            },    
            {
                 path:'/allservice',
                loader:()=>fetch('https://texicarservice.vercel.app/product'),
                element: <AllService></AllService> , 
                
            },  
            {
                path:'/blog',
                element: <Blog></Blog> ,   
            },    
              
            {
                 path:'/register',
                element: <Register></Register> , 
            },    
            {
                path:'/login',
                element: <Login></Login> ,   
            },  
            {
               path:'/services/:id',
                element:<Services></Services> , 
                loader: ({params})=> fetch(`https://texicarservice.vercel.app/services/${params.id}`)
            },   
            {
                path:'/allreview',
                element: <PrivateRoute><Rivew></Rivew></PrivateRoute> ,   
            },    
            {
                path:'/addroduct',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute> ,  
            },    
             
           
        ]
    }
])


