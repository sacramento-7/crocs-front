import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import Image from "next/image";
import logo from '@/assets/images/logo1.png';

const ProductSavedCard = () => {
    return (
        <Card className='flex shadow'>
            <Link href='#'>
                <CardHeader>
                    <Image
                        alt="Product 1"
                        className="rounded-lg object-cover w-full h-60"
                        height={300}
                        src={logo}
                        style={{
                            aspectRatio: "400/300",
                            objectFit: "cover",
                        }}
                        width={400}
                    />
                </CardHeader>
            </Link>
            <CardContent className='w-full'>
                <div className=' h-full flex flex-col justify-between py-4 px-1'>
                    <div className="flex justify-between">
                        <Link href='#'>
                            <h3 className="font-semibold text-lg md:text-xl lg:text-2xl">product 1</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">UV protection</p>
                        </Link>
                        <div>
                            <Button size="icon" variant="outline">
                                <FaHeart className="w-5 h-5" />
                            </Button>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <p className="font-semibold text-base md:text-lg lg:text-xl">$29.99</p>
                        <Button size="lg">Buy Now</Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default ProductSavedCard