import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel";
import CollectionCard from "../collectionCard/CollectionCard";

const CollectionSectionEnd = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20" style={{direction: 'ltr'}}>
            <div className="container px-4 md:px-6">
                <Carousel className="w-full max-w-full">
                    <CarouselContent>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                            <div className="p-1">
                                <CollectionCard title='کالکشن 15' srcImg='/images/collection-card/collec15.jpg' />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                            <div className="p-1">
                                <CollectionCard title='کالکشن 16'  srcImg='/images/collection-card/collec16.png'/>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                            <div className="p-1">
                                <CollectionCard title='کالکشن 17' srcImg='/images/collection-card/collec17.jpg'/>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                            <div className="p-1">
                                <CollectionCard title='کالکشن 18' srcImg='/images/collection-card/collec18.jpg'/>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                            <div className="p-1">
                                <CollectionCard title='کالکشن 19' srcImg='/images/collection-card/collec19.jpg'/>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                            <div className="p-1">
                                <CollectionCard title='کالکشن 20' srcImg='/images/collection-card/collec20.jpg'/>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                            <div className="p-1">
                                <CollectionCard title='کالکشن 21' srcImg='/images/collection-card/collec21.jpg'/>
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

export default CollectionSectionEnd