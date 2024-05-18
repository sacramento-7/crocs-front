import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card"
import Image from "next/image";
import logo from '@/assets/images/logo1.png';
import Link from "next/link";

const ProductCard = ({ title, hrefRoute='#' }) => {
    //className="w-[350px]" for card
    return (
        <Card>
            <Link href={hrefRoute}>
                <CardHeader>
                    <Image
                        alt="Product 1"
                        className="rounded-t-lg object-cover w-full h-60"
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
            <CardContent>
                <h3 className="font-semibold text-lg md:text-xl lg:text-2xl">{title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">UV protection</p>
                <div className="flex items-center justify-between">
                    <p className="font-semibold text-base md:text-lg lg:text-xl">$29.99</p>
                    <Button size="sm">Buy Now</Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default ProductCard