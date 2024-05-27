import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel";
import ProductCard from "../productCard/ProductCard";

const NewProducts = () => {
    return (
        <section className="py-8 bg-gray-100 md:py-12 lg:py-16" style={{direction: 'ltr'}}>
            <div className="container px-4 md:px-6">
                <div className="mb-8 md:mb-10 lg:mb-12">
                    <h3 className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">جدیدترین محصولات</h3>
                </div>
                <Carousel className="w-full max-w-full">
                    <CarouselContent>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <ProductCard title='محصول 1' srcImg='/images/products/prod1.jpg'/>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <ProductCard title='محصول 2' srcImg='/images/products/prod2.jpg'/>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <ProductCard title='محصول 3' srcImg='/images/products/prod3.jpg'/>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <ProductCard title='محصول 4' srcImg='/images/products/prod4.jpg'/>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <ProductCard title='محصول 5' srcImg='/images/products/prod5.jpg'/>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <ProductCard title='محصول 6' srcImg='/images/products/prod1.jpg'/>
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 z-10 hidden md:flex"/>
                    <CarouselNext className="absolute top-1/2 -translate-y-1/2 z-10 hidden md:flex"/>
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

export default NewProducts

{/* <div className="p-2 md:p-3 lg:p-4">
    <ProductCard title='Product 1' />
</div> */}