import Link from "next/link";
import {
    Card,
    CardContent,
} from "@/components/ui/card";
import Image from "next/image";
import logo from '@/assets/images/logo1.png'

const BannerCard = () => {
    return (
        <Card>
            <CardContent>
                {/* <Link className="absolute inset-0 z-10" href="#">
                    <span className="sr-only">View</span>
                </Link> */}
                <Image
                    alt="Image 1"
                    className="aspect-square object-cover w-full"
                    height={400}
                    src={logo}
                    width={400}
                />
            </CardContent>
        </Card>
    )
}

export default BannerCard