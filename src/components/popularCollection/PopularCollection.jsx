import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel";
import CollectionCard from "../collectionCard/CollectionCard";

const PopularCollection = () => {
    return (
        <section className="py-8 md:py-12 lg:py-16" style={{ direction: 'ltr' }}>
            <div className="container px-4 md:px-6">
                <div className="mb-8 md:mb-10 lg:mb-12">
                    <h3 className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">کالکشن های محبوب</h3>
                </div>
                <Carousel className="w-full max-w-full">
                    <CarouselContent>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                            <div className="p-1">
                                <CollectionCard title='کالکشن 1' srcImg='/images/collection-card/collec7.jpg' />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                            <div className="p-1">
                                <CollectionCard title='کالکشن 2' srcImg='/images/collection-card/collec8.jpg' />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                            <div className="p-1">
                                <CollectionCard title='کالکشن 3' srcImg='/images/collection-card/collec9.jpg' />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                            <div className="p-1">
                                <CollectionCard title='کالکشن 4' srcImg='/images/collection-card/collec10.jpg' />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                            <div className="p-1">
                                <CollectionCard title='کالکشن 5' srcImg='/images/collection-card/collec11.jpg' />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                            <div className="p-1">
                                <CollectionCard title='کالکشن 6' srcImg='/images/collection-card/collec12.jpg' />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                            <div className="p-1">
                                <CollectionCard title='کالکشن 7' srcImg='/images/collection-card/collec13.jpg' />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                            <div className="p-1">
                                <CollectionCard title='کالکشن 8' srcImg='/images/collection-card/collec14.png' />
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
                    <CarouselNext className="absolute top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
                </Carousel>
            </div>
        </section>
    )
}

export default PopularCollection