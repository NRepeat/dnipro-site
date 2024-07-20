"use client";
import React, { useState } from "react";
import VerticalEmblaCarousel from "../ui/Slider/VerticalSlider/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import { Image, Slider } from "@nextui-org/react";
import SliderCustom from "../ui/Slider/EmblaCarousel";
const ImageViewer = ({ images }: { images: string[] }) => {
  const [selectedImage, setSelectedImage] = useState<number>();

  const OPTIONS: EmblaOptionsType = {};
  const verticalImages = images.map((image, i) => (
    <Image
      key={i + "v"}
      alt="Card example background"
      className="z-0  h-full   object-cover  hover:scale-105 transition-all rounded-none"
      src={image}
      onClick={() => setSelectedImage(i)}
    />
  ));
  const horizontalImages = images.map((image, i) => (
    <Image
      key={i + "h"}
      alt="Card example background"
      className="z-0  h-full   object-cover  hover:scale-105 transition-all rounded-none"
      src={image}
      onClick={() => setSelectedImage(i)}
    />
  ));
  return (
    <div className="flex">
      <div className=" w-[500px]">
        <VerticalEmblaCarousel
          options={OPTIONS}
          slides={verticalImages}
        ></VerticalEmblaCarousel>
      </div>
      {/* <div className="relative w-[500px] h-full">
        <SliderCustom
          slides={horizontalImages}
          options={{ loop: true }}
          slideStyle=""
          autoPlay={false}
          selectedSlide={selectedImage}
        ></SliderCustom>
      </div> */}
    </div>
  );
};

export default ImageViewer;
