'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/images/logo4.png';
import profileDefault from '@/assets/images/profile.png';
import { FaGoogle, FaChevronDown } from 'react-icons/fa';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import CartSheet from '../cartSheet/CartSheet';
import Cookies from 'js-cookie';
import { useAuth } from '@/context/AuthContext';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  //const [isLoggedIn, setIsLoggedIn] = useState(true);
  // const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const { token, setToken } = useAuth();

  const pathname = usePathname();

  const handleLogout = () => {
    // Clear token from cookie and state
    Cookies.remove('Token');
    setToken(null);
  };

  return (
    <nav className='bg-green-600 sticky top-0 z-50 border-b border-green-400'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='relative flex h-20 items-center justify-between'>
          <div className='absolute inset-y-0 left-0 flex items-center md:hidden'>
            {/* <!-- Mobile menu button--> */}
            <button
              type='button'
              id='mobile-dropdown-button'
              className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
              aria-controls='mobile-menu'
              aria-expanded='false'
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              <span className='absolute -inset-0.5'></span>
              <span className='sr-only'>Open main menu</span>
              <svg
                className='block h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                />
              </svg>
            </button>
          </div>

          <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
            {/* <!-- Logo --> */}
            <Link className='flex flex-shrink-0 items-center' href='/'>
              <Image className='h-10 w-auto' src={logo} alt='Crocs-Kish' />
              <span className='hidden md:block text-white text-2xl font-bold ml-2'>
                Crocs
              </span>
            </Link>
            {/* <!-- Desktop Menu Hidden below md screens --> */}
            <div className='hidden md:ml-6 md:block'>
              <div className='flex space-x-2'>
                {/* <Link
                  href='/products'
                  className={`${pathname === '/products' ? 'bg-black' : ''} text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}
                >
                  Shop
                </Link> */}


                <NavigationMenu className='p-0'>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuLink href='/products' className={`${navigationMenuTriggerStyle()} ${pathname === '/products' ? 'bg-black' : 'bg-transparent'}  text-white`}>
                        <span href="/products" legacyBehavior passHref className=''>
                          Shop
                        </span>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>

                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className={`${pathname.includes('/products/men') ? 'bg-black' : 'bg-transparent'}  text-white`}>
                        <Link href='/products/men'>Men</Link>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <NavigationMenuLink asChild className={`${pathname === '/products/men/clog' ? 'bg-gray-900 text-white' : ''} grid gap-3 p-2 md:w-[100px] lg:w-[150px]`}>
                          <Link href='/products/men/clog' className='mx-auto hover:bg-gray-900 hover:text-white rounded-md px-4 py-2'>Clog</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild className={`${pathname === '/products/men/sandal' ? 'bg-gray-900 text-white' : ''} grid gap-3 p-2 md:w-[100px] lg:w-[150px]`}>
                          <Link href='/products/men/sandal' className='mx-auto hover:bg-gray-900 hover:text-white rounded-md px-4 py-2'>Sandal</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild className={`${pathname === '/products/men/slides' ? 'bg-gray-900 text-white' : ''} grid gap-3 p-2 md:w-[100px] lg:w-[150px]`}>
                          <Link href='/products/men/slides' className='mx-auto hover:bg-gray-900 hover:text-white rounded-md px-4 py-2'>Slides</Link>
                        </NavigationMenuLink>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>

                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className={`${pathname.includes('/products/women') ? 'bg-black' : 'bg-transparent'}  text-white`}>
                        <Link href='/products/women'>Women</Link>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <NavigationMenuLink asChild className={`${pathname === '/products/women/clog' ? 'bg-gray-900 text-white' : ''} grid gap-3 p-2 md:w-[100px] lg:w-[150px]`}>
                          <Link href='/products/women/clog' className='mx-auto hover:bg-gray-900 hover:text-white rounded-md px-4 py-2'>Clog</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild className={`${pathname === '/products/women/sandal' ? 'bg-gray-900 text-white' : ''} grid gap-3 p-2 md:w-[100px] lg:w-[150px]`}>
                          <Link href='/products/women/sandal' className='mx-auto hover:bg-gray-900 hover:text-white rounded-md px-4 py-2'>Sandal</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild className={`${pathname === '/products/women/slides' ? 'bg-gray-900 text-white' : ''} grid gap-3 p-2 md:w-[100px] lg:w-[150px]`}>
                          <Link href='/products/women/slides' className='mx-auto hover:bg-gray-900 hover:text-white rounded-md px-4 py-2'>Slides</Link>
                        </NavigationMenuLink>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>

                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className={`${pathname.includes('/products/kids') ? 'bg-black' : 'bg-transparent'}  text-white`}>
                        <Link href='/products/kids'>Kids</Link>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <NavigationMenuLink asChild className={`${pathname === '/products/kids/clog' ? 'bg-gray-900 text-white' : ''} grid gap-3 p-2 md:w-[100px] lg:w-[150px]`}>
                          <Link href='/products/kids/clog' className='mx-auto hover:bg-gray-900 hover:text-white rounded-md px-4 py-2'>Clog</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild className={`${pathname === '/products/kids/sandal' ? 'bg-gray-900 text-white' : ''} grid gap-3 p-2 md:w-[100px] lg:w-[150px]`}>
                          <Link href='/products/kids/sandal' className='mx-auto hover:bg-gray-900 hover:text-white rounded-md px-4 py-2'>Sandal</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild className={`${pathname === '/products/kids/slides' ? 'bg-gray-900 text-white' : ''} grid gap-3 p-2 md:w-[100px] lg:w-[150px]`}>
                          <Link href='/products/kids/slides' className='mx-auto hover:bg-gray-900 hover:text-white rounded-md px-4 py-2'>Slides</Link>
                        </NavigationMenuLink>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>

                <NavigationMenu className='p-0'>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuLink href='/admin' className={`${navigationMenuTriggerStyle()} ${pathname.includes('/admin') ? 'bg-black' : 'bg-transparent'}  text-white`}>
                        <span href="/admin" legacyBehavior passHref className=''>
                          Admin
                        </span>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>

              </div>
            </div>
          </div>

          {/* <!-- Right Side Menu (Logged Out) --> */}
          {!token && (
            <div className='hidden md:block md:ml-6'>
              <div className='flex items-center'>
                <button className='flex items-center text-white bg-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'>
                  <Link href='/accounts/login' className='flex items-center'>
                    <FaGoogle className='text-white mr-2' />
                    <span>Login or Register</span>
                  </Link>
                </button>
              </div>
            </div>
          )}

          {/* <!-- Right Side Menu (Logged In) --> */}
          {token && (
            <div className='absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0'>
              <Link href='/messages' className='relative group'>
                <button
                  type='button'
                  className='relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                >
                  <span className='absolute -inset-1.5'></span>
                  <span className='sr-only'>View notifications</span>
                  <svg
                    className='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0'
                    />
                  </svg>
                </button>
                <span className='absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full'>
                  2
                  {/* <!-- Replace with the actual number of notifications --> */}
                </span>
              </Link>
              {/* <!-- Profile dropdown button --> */}
              <div className='relative ml-3'>
                {/* <!-- Profile dropdown --> */}
                <div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button
                        type='button'
                        className='relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                        id='user-menu-button'
                        aria-expanded='false'
                        aria-haspopup='true'
                      >
                        <span className='absolute -inset-1.5'></span>
                        <span className='sr-only'>Open user menu</span>
                        <Image
                          className='h-8 w-8 rounded-full'
                          src={profileDefault}
                          alt=''
                        />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-40">
                      <DropdownMenuGroup>
                        <DropdownMenuItem className={`${pathname === '/profile' ? 'bg-gray-900 text-white' : ''} mx-auto hover:bg-gray-900 hover:text-white rounded-md`}>
                          <Link href='/profile' className='mx-auto'>Your Profile</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem className={`${pathname === '/products/saved' ? 'bg-gray-900 text-white' : ''} mx-auto hover:bg-gray-900 hover:text-white rounded-md`}>
                          <Link href='/products/saved' className='mx-auto'>Wishlist</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Button onClick={handleLogout} className='mx-auto'>Sign Out</Button>
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              <div className='relative'>
                <div>
                  <CartSheet itemsCount={3} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      {
        isMobileMenuOpen && (
          <div id='mobile-menu' className='md:hidden'>
            <div className='space-y-1 px-2 pb-3 pt-2'>
              <Link
                href='/'
                className={`${pathname === '/' ? 'bg-black' : ''} text-white block hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium`}
              >
                Home
              </Link>
              <Link
                href='/products'
                className={`${pathname === '/products' ? 'bg-black' : ''} text-white hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium`}
              >
                Shop
              </Link>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className='block'>
                  <AccordionTrigger className='text-gray-300'>
                    <Link
                      href='/products/men'
                      className={`${pathname.includes('/products/men') ? 'bg-black' : ''} flex items-center text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium`}
                    >
                      <span>Men</span>
                      {/* <FaChevronDown className='ml-1 mt-1' /> */}
                    </Link>
                  </AccordionTrigger>
                  <AccordionContent>
                    <Link href='/products/men/sandal' className={`${pathname === '/products/men/sandal' ? 'bg-gray-800' : ''} items-center text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-small`}>Sandal</Link>
                    <Link href='/products/men/clog' className={`${pathname === '/products/men/clog' ? 'bg-gray-800' : ''} items-center text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-small`}>Clog</Link>
                    <Link href='/products/men/slides' className={`${pathname === '/products/men/slides' ? 'bg-gray-800' : ''} items-center text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-small`}>Slides</Link>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className='text-gray-300'>
                    <Link
                      href='/products/women'
                      className={`${pathname.includes('/products/women') ? 'bg-black' : ''} flex items-center text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium`}
                    >
                      <span>Women</span>
                    </Link>
                  </AccordionTrigger>
                  <AccordionContent>
                    <Link href='/products/women/sandal' className={`${pathname === '/products/women/sandal' ? 'bg-gray-800' : ''} flex items-center text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-small`}>Sandal</Link>
                    <Link href='/products/women/clog' className={`${pathname === '/products/women/clog' ? 'bg-gray-800' : ''} flex items-center text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-small`}>Clog</Link>
                    <Link href='/products/women/slides' className={`${pathname === '/products/men/slides' ? 'bg-gray-800' : ''} flex items-center text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-small`}>Slides</Link>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className='text-gray-300'>
                    <Link
                      href='/products/kids'
                      className={`${pathname.includes('/products/kids') ? 'bg-black' : ''} flex items-center text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium`}
                    >
                      <span>Kids</span>
                    </Link>
                  </AccordionTrigger>
                  <AccordionContent>
                    <Link href='/products/kids/sandal' className={`${pathname === '/products/kids/sandal' ? 'bg-gray-800' : ''} flex items-center text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-small`}>Sandal</Link>
                    <Link href='/products/kids/clog' className={`${pathname === '/products/kids/clog' ? 'bg-gray-800' : ''} flex items-center text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-small`}>Clog</Link>
                    <Link href='/products/kids/slides' className={`${pathname === '/products/kids/slides' ? 'bg-gray-800' : ''} flex items-center text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-small`}>Slides</Link>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              {!token && (
                <button className='flex items-center text-white bg-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 my-4'>
                  <FaGoogle className='text-white mr-2' />
                  <span>Login or Register</span>
                </button>
              )}
            </div>
          </div>
        )
      }

    </nav >
  );
};
export default Navbar;