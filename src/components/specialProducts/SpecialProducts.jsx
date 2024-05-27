import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel";
import ProductCard from "../productCard/ProductCard";

const SpecialProducts = () => {
    return (
        <section className="py-12 bg-gray-100 md:py-16 lg:py-20" style={{ direction: 'ltr' }}>
            <div className="container px-4 md:px-6">
                <div className="mb-8 md:mb-10 lg:mb-12">
                    <h2 className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">محصولات ویژه</h2>
                </div>
                <Carousel className="w-full max-w-full">
                    <CarouselContent>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <ProductCard title='محصول یک' srcImg='/images/products/prod1.jpg' />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <ProductCard title='محصول دو' srcImg='/images/products/prod2.jpg' />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <ProductCard title='محصول سه' srcImg='/images/products/prod3.jpg' />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <ProductCard title='محصول چهار' srcImg='/images/products/prod4.jpg' />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <ProductCard title='محصول پنج' srcImg='/images/products/prod5.jpg' />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <ProductCard title='محصول شش' srcImg='/images/products/prod1.jpg' />
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
                    <CarouselNext className="absolute top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
                    {/* <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden md:block">
                        <ChevronLeftIcon className="h-6 w-6" />
                    </CarouselPrevious>
                    <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden md:block">
                        <ChevronRightIcon className="h-6 w-6" />
                    </CarouselNext> */}
                </Carousel>
            </div>
        </section>
    )
}

export default SpecialProducts

{/* <div className="p-2 md:p-3 lg:p-4">
    <ProductCard title='Product 1' />
</div> */}