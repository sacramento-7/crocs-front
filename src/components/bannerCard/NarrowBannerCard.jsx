import Link from "next/link";
import {
    Card,
    CardContent,
} from "@/components/ui/card";
import Image from "next/image";
import logo from '@/assets/images/logo1.png'

const NarrowBannerCard = () => {
    return (
        <Card>
            <CardContent>
                <Link className="absolute inset-0 z-10" href="#">
                    <span className="sr-only">View</span>
                </Link>
                <Image
                    alt="Image 1"
                    className="object-cover w-full h-64"
                    height={400}
                    style={{
                        aspectRatio: "600/400",
                        objectFit: "cover",
                    }}
                    src={logo}
                    width={600}

                />
            </CardContent>
        </Card>
    )
}

export default NarrowBannerCard