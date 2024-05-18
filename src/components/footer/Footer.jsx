import Link from "next/link";
import Image from 'next/image';
import logo from '@/assets/images/logo2.png';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400 py-8">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-0">
                <div className="flex items-center mb-4 md:mb-0">
                    <Image className='h-10 w-auto mr-2' src={logo} alt='kish-crocs' />
                    <span className='hidden md:block text-white text-2xl font-bold ml-2'>
                        Crocs
                    </span>
                </div>
                <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
                    <Link className="hover:text-gray-200 transition-colors" href="/">
                        Home
                    </Link>
                    <Link className="hover:text-gray-200 transition-colors" href="/about">
                        About
                    </Link>
                    <Link className="hover:text-gray-200 transition-colors" href="/">
                        Services
                    </Link>
                    <Link className="hover:text-gray-200 transition-colors" href="/contact">
                        Contact
                    </Link>
                </nav>
                <p className="text-sm mt-4 md:mt-0">© 2024 Kish Crocs Inc. All rights reserved.</p>
            </div>
        </footer>
    )
}
