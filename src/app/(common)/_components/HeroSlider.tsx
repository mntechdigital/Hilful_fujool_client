"use client"
import * as React from "react"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

interface SliderItem {
  id: string;
  image: string;
  heroSectionId: string;
  createdAt: string;
  updatedAt: string;
}

interface HeroSliderProps {
  sliderItems: SliderItem[];
}

export function HeroSlider({ sliderItems }: HeroSliderProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )

  return (
    <Carousel 
      className="w-full max-w-xl mx-auto"
      plugins={[plugin.current]}
      opts={{
        align: "start",
        loop: true,
      }}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {sliderItems && sliderItems.length > 0 && sliderItems.map((item, index) => (
          <CarouselItem key={item.id} className="pl-2 md:pl-4">
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-xl">
              <Image 
                src={item.image} 
                alt={`Slide ${index + 1}`} 
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4" />
    </Carousel>
  );
}