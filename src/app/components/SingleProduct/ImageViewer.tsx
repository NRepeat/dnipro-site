"use client";
import React, { useState } from "react";
import VerticalEmblaCarousel from "../ui/Slider/VerticalSlider/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import Image from "next/image";
import { Slider } from "@nextui-org/react";
import EmblaCarousel from "../ui/Slider/VerticalSlider/EmblaCarousel";
import SliderCustom from "../ui/Slider/EmblaCarousel";
const ImageViewer = ({ images }: { images: string[] }) => {
  const [selectedImage, setSelectedImage] = useState<string>();

  const OPTIONS: EmblaOptionsType = { axis: "y" };
  const imagesNode = images.map((image) => (
    <Image
      src={image}
      alt=""
      onClick={() => setSelectedImage(image)}
      className="max-w-[100px]"
      key={image}
      width={300}
      height={350}
    />
  ));
  return (
    <>
      <div>
        <VerticalEmblaCarousel options={OPTIONS}>
          {imagesNode}
        </VerticalEmblaCarousel>
      </div>
      <div>
        {/* <Image
          src={selectedImage ? selectedImage : images[0]}
          alt=""
          className=""
          width={300}
          height={350}
        /> */}
      </div>
    </>
  );
};

export default ImageViewer;
