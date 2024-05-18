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
                    <Button variant="outline">Sort by <FaChevronDown className='ml-1 mt-1' /></Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-40">
                    <DropdownMenuGroup>
                        <DropdownMenuItem>
                            <span>Newest</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <span>Price: High to Low</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <span>Price: Low to High</span>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default SortingFilter