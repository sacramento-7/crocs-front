import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import logo from '@/assets/images/logo1.png';

const AboutCard = () => {
    return (
        <Card>
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
            <CardContent>
                <h3 className="font-semibold text-lg md:text-xl lg:text-2xl">کفش راحتی</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                کفش‌های راحتی کراکس؛ ترکیبی از سبک، راحتی و دوام برای تمام روز.
                </p>
            </CardContent>
        </Card>
    )
}

export default AboutCard