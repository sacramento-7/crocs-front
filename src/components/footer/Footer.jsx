import Link from "next/link";
import Image from 'next/image';
import logo from '@/assets/images/logo2.png';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400 py-8">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-0">
                <div className="flex items-center mb-4 md:mb-0">
                    <Image className='h-10 w-auto ml-2' src={logo} alt='kish-crocs' />
                    <span className='hidden md:block text-white text-2xl font-bold ml-2'>
                        Crocs
                    </span>
                </div>
                <nav className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0 md:space-x-6">
                    <Link className="hover:text-gray-200 transition-colors md:ml-6" href="/">
                        خانه
                    </Link>
                    <Link className="hover:text-gray-200 transition-colors" href="/about">
                        درباره ما
                    </Link>
                    <Link className="hover:text-gray-200 transition-colors" href="/">
                        خدمات
                    </Link>
                    <Link className="hover:text-gray-200 transition-colors" href="/contact">
                        تماس با ما
                    </Link>
                </nav>
                <p className="text-sm mt-4 md:mt-0">تمامی حقوق این وبسایت متعلق به فروشگاه کیش کراکس میباشد. © کیش کراکس 2024</p>
            </div>
        </footer>
    )
}

//<p className="text-sm mt-4 md:mt-0">© 2024 Kish Crocs Inc. All rights reserved.</p>
