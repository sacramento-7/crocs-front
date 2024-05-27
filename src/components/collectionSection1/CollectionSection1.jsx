import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel";
import CollectionCard from "../collectionCard/CollectionCard";

const CollectionSection1 = () => {
    return (
        <section className="py-12 md:py-16 lg:py-20" style={{direction: 'ltr'}}>
            <div className="container px-4 md:px-6">
                <Carousel className="w-full max-w-full">
                    <CarouselContent>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                            <div className="p-1">
                                <CollectionCard title='کالکشن 1' srcImg='/images/collection-card/collec1.jpg' />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                            <div className="p-1">
                                <CollectionCard title='کالکشن 2'  srcImg='/images/collection-card/collec2.jpg'/>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                            <div className="p-1">
                                <CollectionCard title='کالکشن 3' srcImg='/images/collection-card/collec3.jpg'/>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                            <div className="p-1">
                                <CollectionCard title='کالکشن 4' srcImg='/images/collection-card/collec4.jpg'/>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                            <div className="p-1">
                                <CollectionCard title='کالکشن 5' srcImg='/images/collection-card/collec5.jpg'/>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                            <div className="p-1">
                                <CollectionCard title='کالکشن 6' srcImg='/images/collection-card/collec6.jpg'/>
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

export default CollectionSection1