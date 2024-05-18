import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import Image from "next/image"
import logo from '@/assets/images/logo1.png'

const hero = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 lg:min-h-screen">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col sm:flex-row">
                    <div className="flex-1 flex items-center p-4">
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                    Make your style by CROCS Products
                                </h1>
                                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                                    Streamline your web development workflow with our cutting-edge platform. Unleash your creativity and
                                    focus on building exceptional user experiences.
                                </p>
                            </div>
                            <div className="w-full max-w-sm space-y-2">
                                <form className="flex space-x-2">
                                    <Input className="max-w-lg flex-1" placeholder="Search your products ..." type="text" />
                                    <Button type="submit">Search</Button>
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