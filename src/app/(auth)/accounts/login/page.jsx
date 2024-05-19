'use client';

import LoginForm from "@/components/auth/loginForm/LoginForm";
import { useAuth } from '@/context/AuthContext';
import { useRouter } from "next/navigation";

const page = () => {
    const { token } = useAuth();
    const router = useRouter();
    if(token){
        router.push("/");
        return;
    }

    return (
        <>
            <LoginForm />
        </>
    )
}

export default page