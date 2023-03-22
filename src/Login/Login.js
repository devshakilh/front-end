import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AppleAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import './signUp.css'
import { BsApple } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../AuthProvider/AuthProvider';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const { providerLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider()
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
    }
    // const AppleProvider = new AppleAuthProvider()
    // const handleAppleProvider = () => {
    //     providerLogin(AppleProvider)
    // }

    const from = location.state?.from?.pathname || '/';

    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message);
            });
    }

    const [acceptField, setAcceptField] = useState(false);
    return (
        <div className='h-[800px] flex justify-center items-center'>

            <form onSubmit={handleSubmit(handleLogin)} action="">

                <h1 className='signIn'>Sign In</h1>
                <p className='welcomeText'>Welcome back, you’ve been missed!</p>
                <button onClick={handleGoogleSignIn} className='flex items-center gap-2 px-4 text-gray-400 font-semibold google'><span className='text-2xl'><FcGoogle /> </span> Sign Up With Google</button>
                <button className='flex items-center gap-2 px-4 text-gray-400 font-semibold apple'><span className='text-2xl'><BsApple /></span> Sign Up with Apple ID</button>
                <h3 className='or text-gray-400 font-bold text-center text-xl'>OR</h3>


                <input className='inEmail' placeholder=' Your Email' type="email" name="email" id=""
                    {...register("email", {
                        required: "Email Address is required"
                    })}
                />
                {errors.email && <p className='error'>{errors.email?.message}</p>}

                <input className='inName' placeholder=' Password' type="password" name="password" id=""
                    {...register("password", {
                        required: "Password is required",
                        minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                    })}

                />

                <div className="form-control conditionLogin">
                    <label className="label cursor-pointer">

                        <input onClick={() => setAcceptField(!acceptField)} type="checkbox" className="checkbox" />
                    </label>
                </div>
                <p className='rememberMe'>Remember Me</p>


                <input className='buttonSignIn text text-white font-semibold' value="Sign In" type="submit" disabled={!acceptField} />
                {loginError && <p className='error' >{loginError}</p>}
                <h4 className='dontHave'>Don’t have an account yet?  <Link to='/signUp' className='text-blue-500'>Sign Up</Link></h4>

            </form>

        </div>
    );
};

export default Login;