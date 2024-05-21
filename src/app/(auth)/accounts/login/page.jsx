'use client';

import LoginForm from "@/components/auth/loginForm/LoginForm";
import { UseAuth } from '@/context/AuthContext';
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LoginPage = () => {
    const { token } = UseAuth();
    const router = useRouter();
    //const router = useRouter();
    // if (token) {
    //     //router.push("/");
    //     redirect('/');
    //     //return;
    // }
    useEffect(() => {
        if (token) {
            router.push('/');
        }
    }, [token, router])

    return (
        <>
            <LoginForm />
        </>
    )
}

export default LoginPage