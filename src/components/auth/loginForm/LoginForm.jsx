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
import { UseAuth } from '@/context/AuthContext';
import { toast } from 'react-toastify';


const schema = yup.object({
    username: yup.string().required('تلفن همراه الزامی است'),
    password: yup.string().required('رمز عبور الزامی است').min(6, 'رمز عبور باید شامل حداقل 6 کاراکتر باشد'),
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
    const { setToken, setIsAdmin } = UseAuth();

    const router = useRouter();

    let key = '';
    let isAdmin = false;

    const submitHandler = async (data) => {
        try {
            const response = await axios.post('http://localhost:3000/api/login', data).then((res) => {
                if (res.data.error) {
                    if (res.data.error.status == 400) {
                        setErrorMessage('تلفن همراه یا رمز عبور اشتباه است!');
                        return;
                    } else {
                        setErrorMessage('مشکلی پیش آمده است!')
                        return;
                    }
                }

                key = res.data.key;
                isAdmin = res.data.isAdmin;
                setToken(key);
                setIsAdmin(isAdmin);
            });

            if (key !== undefined && key !== null && key !== '') {
                Cookies.set('Token', key, { secure: true, sameSite: 'None', expires: 4 }); // Set cookie to expire in 4 days
                router.push('/');
                toast.success("با موفقیت وارد شدید!", {
                    position: "bottom-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }

            Cookies.set('IsAdmin', isAdmin, { secure: true, sameSite: 'None', expires: 4 });

        } catch (error) {
            setErrorMessage('مشکلی پیش آمده است!');
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
                    ورود به حساب کاربری
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSubmit(submitHandler)}>
                    <div>
                        <label htmlFor="phoneNumber" className="block text-sm font-bold leading-6 text-gray-900">
                            تلفن همراه
                        </label>
                        <div className="mt-2">
                            <input
                                {...register('username')}
                                id="phoneNumber"
                                name="username"
                                type="tel"
                                autoComplete="phoneNumber"
                                placeholder='09121113333'
                                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 focus:ring-indigo-600"
                            />
                            {errors.username?.message && (
                                <div>
                                    <p className='text-red-500 text-xs mt-1'>{errors.username?.message}</p>
                                </div>
                            )}
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-bold leading-6 text-gray-900">
                                رمز عبور
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                {...register('password')}
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                placeholder='Ab%Gh2T#'
                                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            {errors.password?.message && (
                                <div>
                                    <p className='text-red-500 text-xs mt-1'>{errors.password?.message}</p>
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
                            ورود
                        </button>
                    </div>
                </form>


                <p className="mt-10 text-center text-sm text-gray-500">
                    حساب کاربری ندارید؟{' '}
                    <Link href="/accounts/register" className="font-semibold leading-6 text-green-600 hover:text-green-500">
                        ثبت حساب کاربری جدید
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default LoginForm;


//Cookies.set('Token', key, { path: '/', secure: true, sameSite: 'strict', expires: 4 });