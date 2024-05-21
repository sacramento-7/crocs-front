'use client';

import LoginForm from "@/components/auth/loginForm/LoginForm";
import { useAuth } from '@/context/AuthContext';
import { redirect, useRouter } from "next/navigation";

const page = () => {
    const { token } = useAuth();
    const router = useRouter();
    if(token){
        //router.push("/");
        redirect('/');
        //return;
    }

    return (
        <>
            <LoginForm />
        </>
    )
}

export default page