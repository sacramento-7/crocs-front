import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaChevronDown } from 'react-icons/fa';

const SortingFilter = () => {
    return (
        <div className="px-8">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline">مرتب شده با<FaChevronDown className='mr-1 mt-1' /></Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-40">
                    <DropdownMenuGroup style={{direction: 'rtl'}}>
                        <DropdownMenuItem>
                            <span>جدیدترین</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <span>قیمت: بالا به پایین</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <span>قیمت: پایین به بالا</span>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default SortingFilter