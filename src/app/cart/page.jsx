import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import logo from '@/assets/images/logo1.png';
import Image from "next/image";
import { FaMinus, FaPlus, FaRegTrashAlt } from "react-icons/fa";
import Link from "next/link";

const CartPage = () => {
    return (
        <div className="container mx-auto py-8 px-4 md:px-6 lg:px-8">
            <h1 className="text-2xl font-bold mb-6">سبد خرید شما</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="col-span-2">
                    <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-medium">کالاهای سبد خرید</h2>
                            <span className="text-gray-500">3 مورد</span>
                        </div>
                        <div className="space-y-4">
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
                                    <h3 className="text-base font-medium">دمپایی کراکس</h3>
                                    <p className="text-gray-500 text-sm">رنگ: مشکی</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Button size="icon" variant="outline" className='sm:size-sm'>
                                        <FaMinus className="w-4 h-4" />
                                    </Button>
                                    <span>3</span>
                                    <Button size="icon" variant="outline">
                                        <FaPlus className="w-4 h-4" />
                                    </Button>
                                    <Button size="icon" variant="outline">
                                        <FaRegTrashAlt className="w-4 h-4" />
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
                                    <h3 className="text-base font-medium">صندل کراکس</h3>
                                    <p className="text-gray-500 text-sm">رنگ: قرمز</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Button size="icon" variant="outline">
                                        <FaMinus className="w-4 h-4" />
                                    </Button>
                                    <span>1</span>
                                    <Button size="icon" variant="outline">
                                        <FaPlus className="w-4 h-4" />
                                    </Button>
                                    <Button size="icon" variant="outline">
                                        <FaRegTrashAlt className="w-4 h-4" />
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
                                    <h3 className="text-base font-medium">دمپایی کراکس</h3>
                                    <p className="text-gray-500 text-sm">رنگ: زرد</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Button size="icon" variant="outline">
                                        <FaMinus className="w-4 h-4" />
                                    </Button>
                                    <span>2</span>
                                    <Button size="icon" variant="outline">
                                        <FaPlus className="w-4 h-4" />
                                    </Button>
                                    <Button size="icon" variant="outline">
                                        <FaRegTrashAlt className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
                    <h2 className="text-lg font-medium">خلاصه سبد خرید</h2>
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <span>مجموع خرید</span>
                            <span>$250.00</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span>تخفیف</span>
                            <span className="text-green-500">-$25.00</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span>هزینه ارسال</span>
                            <span>$10.00</span>
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between font-medium">
                            <span>جمع کل</span>
                            <span>$235.00</span>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Input className="flex-1" placeholder="کد تخفیف خود را وارد کنید" type="text" />
                            <Button size="sm">ثبت</Button>
                        </div>
                        <Button className="w-full" size="lg">
                            ادامه پرداخت
                        </Button>
                        <Button variant="outline" className="w-full" size="lg" asChild>
                            <Link href='/products'>ادامه خرید</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPage