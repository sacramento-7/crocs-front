"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"


export function NavigationMenuDemo() {
    return (
        <div>Test</div>
    )
}


{/* <Link href='/cart'>
                    <FaShoppingCart className='h-8 w-8 text-gray-800 hover:text-gray-700' />
                    <span className='absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full'>
                      3
                    </span>
                  </Link> */}



{/* <NavigationMenu className='p-0'>
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
                </NavigationMenu> */}


