import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card"
import Image from "next/image";
import logo from '@/assets/images/logo1.png';
import Link from "next/link";

const ProductCard = ({ title, srcImg, hrefRoute = '#' }) => {
    //className="w-[350px]" for card
    return (
        <Card className='hover:drop-shadow-md' style={{direction: 'rtl'}}>
            <Link href={hrefRoute}>
                <CardHeader className='p-0'>
                    <Image
                        alt="Product 1"
                        className="rounded-t-lg object-cover w-full h-60"
                        height={300}
                        src={srcImg}
                        style={{
                            aspectRatio: "400/300",
                            objectFit: "cover",
                        }}
                        width={400}
                    />
                </CardHeader>
            </Link>
            <CardContent>
                <h3 className="font-semibold text-lg md:text-xl lg:text-2xl mb-2">{title}</h3>
                {/* <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">UV protection</p> */}
                <div className="flex items-center justify-between">
                    <p className="font-semibold text-base md:text-lg lg:text-xl">$29.99</p>
                    <Button size="sm">افزودن به سبد خرید</Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default ProductCard