/* eslint-disable @typescript-eslint/no-explicit-any */


import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";


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
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {sliderItems && sliderItems.length > 0 && sliderItems.map((item, index) => (
          <CarouselItem key={item.id}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <Image src={item.image} alt={`Slide ${index + 1}`} width={300} height={300} className="object-cover rounded-md"/>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

