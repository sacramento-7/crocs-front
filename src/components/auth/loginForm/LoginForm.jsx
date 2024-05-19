'use client';

import Image from 'next/image';
import logo from '@/assets/images/logo2.png';
import Link from 'next/link';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { toast } from 'react-toastify';


const schema = yup.object({
    username: yup.string().required('Please enter your Phone Number'),
    password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
}).required();

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });
    const [errorMessage, setErrorMessage] = useState(null);
    //const [key, setKey] = useState(null);
    const { setToken } = useAuth();

    const router = useRouter();

    let key = '';

    const submitHandler = async (data) => {
        try {
            const response = await axios.post('http://localhost:3000/api/login', data).then((res) => {
                if (res.data.error) {
                    setErrorMessage('Phone Number or Password is wrong!');
                    return;
                }

                key = res.data.key;
                setToken(key);
                //setKey(res.data.key);

            });

            if (key !== undefined && key !== null) {
                Cookies.set('Token', key, { path: '/', secure: true, sameSite: 'strict', expires: 4 }); // Set cookie to expire in 4 days
                router.push('/');
                toast.success("You have successfully logged in!", {
                    position: "bottom-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });

                //revalidatePath('/');
            }

        } catch (error) {
            setErrorMessage('Something went wrong!');
            console.log('Error in login form: ', error);
        }
    }

    return (
        <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <Image
                    width={100}
                    height={100}
                    className="mx-auto h-10 w-auto"
                    src={logo}
                    alt="Your Company"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign in to your account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSubmit(submitHandler)}>
                    <div>
                        <label htmlFor="phoneNumber" className="block text-sm font-medium leading-6 text-gray-900">
                            Phone Number
                        </label>
                        <div className="mt-2">
                            <input
                                {...register('username')}
                                id="phoneNumber"
                                name="username"
                                type="tel"
                                autoComplete="phoneNumber"
                                placeholder='09121113333'
                                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            {errors.username?.message && (
                                <div>
                                    <p className='text-red-500'>{errors.username?.message}</p>
                                </div>
                            )}
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                {...register('password')}
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            {errors.password?.message && (
                                <div>
                                    <p className='text-red-500'>{errors.password?.message}</p>
                                </div>
                            )}
                        </div>
                    </div>
                    {errorMessage && (
                        <div>
                            <p className='text-red-500'>{errorMessage}</p>
                        </div>
                    )}

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Sign in
                        </button>
                    </div>
                </form>


                <p className="mt-10 text-center text-sm text-gray-500">
                    Don't have an account?{' '}
                    <Link href="/accounts/register" className="font-semibold leading-6 text-green-600 hover:text-green-500">
                        Sign-Up for a new account
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default LoginForm