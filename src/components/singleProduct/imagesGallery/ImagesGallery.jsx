import Image from 'next/image';
import logo from '@/assets/images/logo1.png';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const ImagesGallery = () => {
  return (
    <div className="grid gap-4">
      <div className="aspect-square overflow-hidden rounded-lg">
        <Image
          alt="Product Image"
          className="object-cover w-full h-full"
          height={800}
          src={logo}
          style={{
            aspectRatio: "800/800",
            objectFit: "cover",
          }}
          width={800}
        />
      </div>
      <div className="grid grid-cols-4">
        <div className='col-start-2 col-span-2'>
          <Carousel className="w-full">
            <CarouselContent className=''>
              <CarouselItem className="md:basis-1/2 lg:basis-1/2">
                <button className="border hover:border-gray-900 rounded-lg overflow-hidden transition-colors dark:hover:border-gray-50">
                  <Image
                    alt="Preview thumbnail"
                    className="aspect-square object-cover"
                    height={100}
                    src={logo}
                    width={100}
                  />
                  <span className="sr-only">View Image 1</span>
                </button>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/2">
                <button className="border hover:border-gray-900 rounded-lg overflow-hidden transition-colors dark:hover:border-gray-50">
                  <Image
                    alt="Preview thumbnail"
                    className="aspect-square object-cover"
                    height={100}
                    src={logo}
                    width={100}
                  />
                  <span className="sr-only">View Image 1</span>
                </button>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/2">
                <button className="border hover:border-gray-900 rounded-lg overflow-hidden transition-colors dark:hover:border-gray-50">
                  <Image
                    alt="Preview thumbnail"
                    className="aspect-square object-cover"
                    height={100}
                    src={logo}
                    width={100}
                  />
                  <span className="sr-only">View Image 1</span>
                </button>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/2">
                <button className="border hover:border-gray-900 rounded-lg overflow-hidden transition-colors dark:hover:border-gray-50">
                  <Image
                    alt="Preview thumbnail"
                    className="aspect-square object-cover"
                    height={100}
                    src={logo}
                    width={100}
                  />
                  <span className="sr-only">View Image 1</span>
                </button>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/2">
                <button className="border hover:border-gray-900 rounded-lg overflow-hidden transition-colors dark:hover:border-gray-50">
                  <Image
                    alt="Preview thumbnail"
                    className="aspect-square object-cover"
                    height={100}
                    src={logo}
                    width={100}
                  />
                  <span className="sr-only">View Image 1</span>
                </button>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* <button className="border hover:border-gray-900 rounded-lg overflow-hidden transition-colors dark:hover:border-gray-50">
          <Image
            alt="Preview thumbnail"
            className="aspect-square object-cover"
            height={100}
            src={logo}
            width={100}
          />
          <span className="sr-only">View Image 2</span>
        </button>
        <button className="border hover:border-gray-900 rounded-lg overflow-hidden transition-colors dark:hover:border-gray-50">
          <Image
            alt="Preview thumbnail"
            className="aspect-square object-cover"
            height={100}
            src={logo}
            width={100}
          />
          <span className="sr-only">View Image 3</span>
        </button>
        <button className="border hover:border-gray-900 rounded-lg overflow-hidden transition-colors dark:hover:border-gray-50">
          <Image
            alt="Preview thumbnail"
            className="aspect-square object-cover"
            height={100}
            src={logo}
            width={100}
          />
          <span className="sr-only">View Image 4</span>
        </button> */}
      </div>
    </div>
  )
}

export default ImagesGallery


// <CarouselItem className="md:basis-1/2 lg:basis-1/3">