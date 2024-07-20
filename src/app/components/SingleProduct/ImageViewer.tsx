"use client";
import React, { useState, useEffect } from "react";
import VerticalEmblaCarousel from "../ui/Slider/VerticalSlider/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import { Image, Slider, Spinner } from "@nextui-org/react";
import SliderCustom from "../ui/Slider/EmblaCarousel";

const ImageViewer = ({ images }: { images: string[] }) => {
  const [selectedImage, setSelectedImage] = useState<number>();
  const [loading, setLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(0);
  console.log("🚀 ~ ImageViewer ~ loadedImages:", loadedImages);

  const OPTIONS: EmblaOptionsType = {};

  const handleImageLoad = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    setLoadedImages((prev) => prev + 1);
    if (loadedImages >= 1) {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   if (loadedImages === images.length) {
  //     setLoading(false);
  //   }
  // }, [loadedImages, images.length]);

  const verticalImages = images.map((image, i) => (
    <Image
      key={i + "v"}
      alt="Card example background"
      className="z-0 h-full object-cover hover:scale-105 transition-all rounded-none"
      src={image}
      onClick={() => setSelectedImage(i)}
      onLoad={(e) => handleImageLoad(e)}
    />
  ));

  return (
    <div className="flex">
      {/* {loading && (
        <div className="flex justify-center items-center w-full h-full">
          <Spinner />
        </div>
      )} */}
      {
        <div
          className={`w-[700px] ${
            loadedImages >= 1 ? "opacity-100" : "opacity-0"
          } transition-opacity duration-500 `}
        >
          <VerticalEmblaCarousel
            options={OPTIONS}
            slides={verticalImages}
          ></VerticalEmblaCarousel>
        </div>
      }
    </div>
  );
};

export default ImageViewer;
