import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from '@/assets/images/logo1.png';

const hero = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 lg:min-h-screen">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col sm:flex-row">
                    <div className="flex-1 flex items-center p-4">
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-3xl md:text-4xl xl:text-6xl/none">
                                    استایل خود را با محصولات کراکس بسازید
                                </h1>
                                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                                کراکس یک برند جهانی معروف است که به تولید کفش‌های راحتی، سبک و با دوام می‌پردازد. محصولات کراکس با استفاده از مواد اولیه‌ی خاص و فناوری‌های پیشرفته، راحتی و کارایی بی‌نظیری را به کاربران ارائه می‌دهند. از کفش‌های کلاسیک و دمپایی‌های راحتی گرفته تا کفش‌های اسپرت و حرفه‌ای، کراکس انتخابی ایده‌آل برای هر روز و هر موقعیت است. با کراکس، تجربه‌ی راحتی واقعی را احساس کنید.
                                </p>
                            </div>
                            <div className="w-full max-w-sm space-y-2">
                                <form className="flex">
                                    <Input className="max-w-lg flex-1" placeholder="محصول خود را بیابید ..." type="text" />
                                    <Button type="submit" className="mr-1">جستجو</Button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 p-4 flex items-center">
                        <Image
                            alt="Hero"
                            className="mx-auto overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                            height="900"
                            src={logo}
                            width="1000"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default hero