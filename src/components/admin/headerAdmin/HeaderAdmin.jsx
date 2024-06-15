import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaBox, FaSearch } from "react-icons/fa";

const HeaderAdmin = () => {
    return (
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
            <Link className="lg:hidden" href="#">
                <FaBox className="h-6 w-6" />
                <span className="sr-only">Home</span>
            </Link>
            <div className="flex-1">
                <h1 className="font-semibold text-lg">پنل داشبورد</h1>
            </div>
            <div className="flex flex-1 items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                <form className="ml-auto flex-1 sm:flex-initial">
                    <div className="relative">
                        <FaSearch className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                        <Input
                            className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px] bg-white"
                            placeholder="جستجو ..."
                            type="search"
                        />
                    </div>
                </form>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button className="rounded-full" size="icon" variant="ghost">
                            {/* <Image
                    alt="Avatar"
                    className="rounded-full"
                    height="32"
                    src={logo}
                    // style={{
                    //   aspectRatio: "32/32",
                    //   objectFit: "cover",
                    // }}
                    width="32"
                  /> */}
                            P
                            <span className="sr-only">Toggle user menu</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>پروفایل من</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>تنظیمات</DropdownMenuItem>
                        <DropdownMenuItem>پشتیبانی</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>خروج</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    )
}

export default HeaderAdmin