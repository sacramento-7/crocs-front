import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"
import Image from "next/image";
import logo from '@/assets/images/logo1.png';
import Link from "next/link";

const CollectionCard = ({ title, srcImg, hrefRoute = '#' }) => {
    return (
        <Card className='p-0 relative hover:drop-shadow-md'>
            <Link href={hrefRoute}>
                <CardHeader className="p-0">
                    <Image
                        alt="Product 1"
                        className="object-cover w-full h-60"
                        height={100}
                        src={srcImg}
                        style={{
                            aspectRatio: "1/1",
                            objectFit: "cover",
                        }}
                        width={100}
                    />
                </CardHeader>
                <div className='absolute bottom-0 w-full backdrop-opacity-10 backdrop-invert bg-white/40 flex justify-center items-center py-1'>
                    <div>
                        <h6 className="font-semibold text-lg md:text-xl lg:text-2xl">{title}</h6>
                    </div>
                </div>
            </Link>
        </Card>
    )
}

export default CollectionCard