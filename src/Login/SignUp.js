import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './signUp.css'
import { BiLock } from "react-icons/bi";
import { BsApple } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useForm } from 'react-hook-form';
import { GoogleAuthProvider } from 'firebase/auth';


const SignUp = () => {


    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const signUpHandle = () => {
    //     console.log(name, email, password);
    // }
    const { providerLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider()
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
    }
    // const AppleProvider = new AppleAuthProvider()
    // const handleAppleProvider = () => {
    //     providerLogin(AppleProvider)
    // }

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('')
    const navigate = useNavigate();
    const handleSignUp = (data) => {

        console.log(data);
        setSignUpError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {

                        navigate('/');
                    })
                    .catch(err => console.log(err));

            })
            .catch(error => {
                console.log(error)
                setSignUpError(error.message)
            });
    }
    const [acceptField, setAcceptField] = useState(false);

    return (
        <div className='h-[900px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <div className='p16'>


                    <form onSubmit={handleSubmit(handleSignUp)} action="" >
                        <h1 className='getting'>Getting Started</h1>
                        <p className='createAn'>Create an account to continue!</p>

                        <button onClick={handleGoogleSignIn} className='flex items-center gap-2 px-4 text-gray-400 font-semibold google'><span className='text-2xl'><FcGoogle /> </span> Sign Up With Google</button>
                        <button className='flex items-center gap-2 px-4 text-gray-400 font-semibold apple'><span className='text-2xl'><BsApple /></span> Sign Up with Apple ID</button>

                        <h3 className='or text-gray-400 font-bold text-center text-xl'>OR</h3>


                        <input className='inEmail' placeholder='@ Your Email' type="email" oname="email" id=""
                            {...register("email", {
                                required: 'email is required'
                            })}
                        />


                        <p className='error'> {errors.email}</p>
                        <input className='inName' placeholder=' Your Name' type="name" name="name" id=""
                            {...register("name")}

                        />



                        <input className='inPassword' placeholder=' Create Password' type="password" name="password" id=""
                            {...register("password", {
                                required: 'password is required',
                                minLength: { value: 6, message: 'password must be 6 characters long' }
                            })}
                        />

                        <div className='flex gap-4'>
                            <p className='passwordBBorder'></p>
                            <p className='passwordBBorder2'></p>
                            <p className='passwordBBorder3'></p>
                            <p className='passwordBBorder4'></p>
                            <p className='passwordBBorder5'></p>
                        </div>
                        <div className="conditions form-control">
                            <label className="label cursor-pointer">
                                <input onClick={() => setAcceptField(!acceptField)} type="checkbox" className="checkbox" />


                            </label>
                        </div>
                        <h3 className='buttonTopText'>I agree to the Terms & Conditions</h3>
                        <input className='buttonSignUp text text-white font-semibold' value="Sign Up" type="submit" disabled={!acceptField} />
                        {signUpError && <p className='error' >{signUpError}</p>}

                        <h4 className='alReady'>Already have an account? <Link to='/Login' className='text-blue-500'>Sign In</Link></h4>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default SignUp;