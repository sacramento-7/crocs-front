'use client';

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { FaShoppingCart, FaBox, FaUsers, FaChartLine } from "react-icons/fa";
import { usePathname } from "next/navigation";

const SideNav = () => {
    const pathname = usePathname();
    return (
        <div className="flex flex-col gap-2">
            <div className="flex h-[60px] items-center px-6">
                <Link className="flex items-center gap-2 font-semibold" href="/admin">
                    <span className="">Crocs Kish</span>
                </Link>
            </div>
            <div className="flex-1">
                <nav className="grid items-start px-4 text-sm font-medium">
                    <Link
                        className={`${pathname === '/admin/orders' ? 'bg-gray-100' : ''} flex items-center gap-3 rounded-lg px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50`}
                        href="/admin/orders"
                    >
                        <FaShoppingCart className="h-4 w-4" />
                        Orders
                        <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">12</Badge>
                    </Link>
                    <Link
                        className={`${pathname === '/admin/products' ? 'bg-gray-100' : ''} flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"`}
                        href="/admin/products"
                    >
                        <FaBox className="h-4 w-4" />
                        Products
                    </Link>
                    <Link
                        className={`${pathname === '/admin/users' ? 'bg-gray-100' : ''} flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"`}
                        href="/admin/users"
                    >
                        <FaUsers className="h-4 w-4" />
                        Customers
                    </Link>
                    <Link
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                        href="#"
                    >
                        <FaChartLine className="h-4 w-4" />
                        Analytics
                    </Link>
                </nav>
            </div>
        </div>
    )
}

export default SideNav