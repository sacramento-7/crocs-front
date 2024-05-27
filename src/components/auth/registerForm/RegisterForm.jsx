'use client';

import Image from 'next/image';
import logo from '@/assets/images/logo2.png';
import Link from 'next/link';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const schema = yup.object({
    phone: yup.string().required('تلفن همراه الزامی است'),
    password: yup.string().required('رمز عبور دلخواه خود را وارد کنید').min(6, 'رمز عبور باید شامل حداقل 6 کاراکتر باشد'),
    password2: yup.string().oneOf([yup.ref('password'), null], 'رمزهای عبور وارد شده بایستی یکسان باشند'),
}).required();

const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const [errorMessage, setErrorMessage] = useState(null);

    const router = useRouter();


    const submitHandler = async (data) => {
        //console.log(data);
        try {

            const response = await axios.post('http://localhost:3000/api/register', data).then((res) => {
                if (res.data.error) {
                    setErrorMessage('The Phone Number already exist!');
                }
                console.log(res.data);
                if (res.data.resp.message) {
                    router.push('/accounts/login');
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
            });


        } catch (error) {
            // setError(error.response.data.error);
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
                    ایجاد حساب کاربری جدید
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSubmit(submitHandler)}>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-bold leading-6 text-gray-900">
                            تلفن همراه
                        </label>
                        <div className="mt-2">
                            <input
                                //{...register('phoneNumber', { required: true })}
                                {...register('phone')}
                                id="phone"
                                name="phone"
                                type="tel"
                                autoComplete="phoneNumber"
                                placeholder='09121113333'
                                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            {errors.phone?.message && (
                                <div>
                                    <p className='text-red-500'>{errors.phone?.message}</p>
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
                                //{...register('password', { required: true, minLength: { value: 6, message: 'Password must be at least 6 characters' } })}
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
                                    <p className='text-red-500'>{errors.password?.message}</p>
                                </div>
                            )}
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="confirmPassword" className="block text-sm font-bold leading-6 text-gray-900">
                                تکرار رمز عبور
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                //{...register('confirmPassword', { required: true })}
                                {...register('password2')}
                                id="confirmPassword"
                                name="password2"
                                type="password"
                                autoComplete="current-password"
                                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            {errors.password2?.message && (
                                <div>
                                    <p className='text-red-500'>{errors.password2?.message}</p>
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
                            ثبت نام
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    دارای حساب کاربری هستید؟{' '}
                    <Link href="/accounts/login" className="font-semibold leading-6 text-green-600 hover:text-green-500">
                        ورود به حساب کاربری
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default RegisterForm