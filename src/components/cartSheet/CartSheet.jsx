import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetTitle, SheetDescription, SheetHeader, SheetClose, SheetContent, Sheet } from "@/components/ui/sheet";
import { FaShoppingCart, FaMinus, FaPlus, FaRegTrashAlt } from 'react-icons/fa';
import logo from '@/assets/images/logo1.png';
import Image from 'next/image';

const CartSheet = ({ itemsCount }) => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                {/* <Button className="rounded-full" size="icon" variant="outline">
                    <ShoppingCartIcon className="w-5 h-5" />
                    <span className="sr-only">Open cart</span>
                </Button> */}
                {/* <Link href='/cart'>
                    <FaShoppingCart className='h-8 w-8 text-gray-800 hover:text-gray-700' />
                    <span className='absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full'>
                      {itemsCount}
                    </span>
                  </Link> */}
                <Button variant="link">
                    <FaShoppingCart className='h-8 w-8 text-gray-800 hover:text-gray-700' />
                    <span className='absolute top-1 right-3 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full'>
                        {itemsCount}
                    </span>
                </Button>
            </SheetTrigger>
            <SheetContent className="w-full max-w-md" side="right">
                <SheetHeader>
                    <SheetTitle>Your Cart</SheetTitle>
                    <SheetDescription>Review and update your cart items.</SheetDescription>
                </SheetHeader>
                <div className="divide-y">
                    <div className="grid gap-4 p-4">
                        <div className="grid grid-cols-[80px_1fr_auto] items-center gap-4">
                            <Image
                                alt="Product Image"
                                className="rounded-md object-cover"
                                height={80}
                                src={logo}
                                style={{
                                    aspectRatio: "80/80",
                                    objectFit: "cover",
                                }}
                                width={80}
                            />
                            <div>
                                <h4 className="font-medium">CottonSculpt Prism Tee</h4>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Color: Black, Size: M</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <Button className="h-8 w-8" size="icon" variant="outline">
                                    <FaMinus className="h-4 w-4" />
                                    <span className="sr-only">Decrease quantity</span>
                                </Button>
                                <span>1</span>
                                <Button className="h-8 w-8" size="icon" variant="outline">
                                    <FaPlus className="h-4 w-4" />
                                    <span className="sr-only">Increase quantity</span>
                                </Button>
                            </div>
                        </div>
                        <div className="grid grid-cols-[80px_1fr_auto] items-center gap-4">
                            <Image
                                alt="Product Image"
                                className="rounded-md object-cover"
                                height={80}
                                src={logo}
                                style={{
                                    aspectRatio: "80/80",
                                    objectFit: "cover",
                                }}
                                width={80}
                            />
                            <div>
                                <h4 className="font-medium">Aqua Filters</h4>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Color: White, Size: L</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <Button className="h-8 w-8" size="icon" variant="outline">
                                    <FaMinus className="h-4 w-4" />
                                    <span className="sr-only">Decrease quantity</span>
                                </Button>
                                <span>2</span>
                                <Button className="h-8 w-8" size="icon" variant="outline">
                                    <FaPlus className="h-4 w-4" />
                                    <span className="sr-only">Increase quantity</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="flex items-center justify-between">
                            <p>Subtotal</p>
                            <p className="font-medium">$148.98</p>
                        </div>
                        <div className="mt-2 flex items-center justify-between">
                            <p>Shipping</p>
                            <p className="font-medium">$9.99</p>
                        </div>
                        <div className="mt-2 flex items-center justify-between">
                            <p>Total</p>
                            <p className="text-2xl font-bold">$158.97</p>
                        </div>
                        <div className="mt-4 flex gap-2">
                            <SheetClose asChild>
                                <Button className="flex-1" variant="outline" asChild>
                                    <Link href='/products'>Continue Shopping</Link>
                                </Button>
                            </SheetClose>
                            <SheetClose asChild>
                                <Button className="flex-1" asChild>
                                    <Link href='/cart'>Your Cart</Link>
                                </Button>
                            </SheetClose>
                        </div>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default CartSheet