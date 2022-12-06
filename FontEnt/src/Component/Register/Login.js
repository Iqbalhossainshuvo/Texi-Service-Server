import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';


const Login = () => {
    const { signin, signInWithGoogle } = useContext(AuthContext); 
    const location = useLocation()
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        signin(email, password)
            .then(result => {
                const user = result.user;
                toast.success('Login user', user);
                navigate(from, {replace:true})
            })
            .catch(error => {
               toast.warning(error)
            }) 

    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then( result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error));
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Please Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <Link to="/register" className="label-text-alt link link-hover">Or create new account!</Link>

                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <button onClick={handleGoogleSignIn} className="btn btn-outline btn-success">Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;