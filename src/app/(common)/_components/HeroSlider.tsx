
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
    <div className="w-full">
      <Carousel 
        className="w-full"
        plugins={[plugin.current]}
        opts={{
          align: "center",
          loop: true,
        }}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {sliderItems && sliderItems.length > 0 && sliderItems.map((item, index) => (
            <CarouselItem key={item.id}>
              <div className="relative w-full h-[450px] md:h-[550px] lg:h-[650px] overflow-hidden rounded-2xl shadow-2xl">
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
        <CarouselPrevious className="left-2 md:left-4 bg-white/90 hover:bg-white" />
        <CarouselNext className="right-2 md:right-4 bg-white/90 hover:bg-white" />
      </Carousel>
    </div>
  );
}