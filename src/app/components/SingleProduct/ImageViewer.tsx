"use client";
import React, { useState, useEffect, useRef } from "react";
import VerticalEmblaCarousel from "../ui/Slider/VerticalSlider/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import { Image, Slider, Spinner } from "@nextui-org/react";
import SliderCustom from "../ui/Slider/EmblaCarousel";
import { ProductStateType } from "@/app/store/slice/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { FilterStateType } from "@/app/store/slice/filterSlice";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ImageViewer = ({ images }: { images: string[] }) => {
  const [selectedImage, setSelectedImage] = useState<number>();
  const [loading, setLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(0);
  const imageViewerRef = useRef(null);
  const OPTIONS: EmblaOptionsType = {};
  const dispatch = useDispatch();
  const filter = useSelector(
    (state: { filter: FilterStateType }) => state.filter
  );

  useGSAP(() => {
    if (filter.filterShouldStick) {
      gsap.to(imageViewerRef.current, {
        top: 0,
        duration: 0.4,
        delay: 0.2,
        ease: "power1.out",
      });
    } else {
      gsap.to(imageViewerRef.current, {
        top: 60,
        duration: 0.3,
        delay: 0.3,
        ease: "power1.out",
      });
    }
  }, [filter.filterShouldStick]);
  const handleImageLoad = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    setLoadedImages((prev) => prev + 1);
    if (loadedImages >= 1) {
      setLoading(false);
    }
  };

  const verticalImages = images.map((image, i) => (
    <Image
      key={i + "v"}
      alt="Card example background"
      className="z-0 h-full object-cover  transition-all rounded-none"
      src={image}
      onClick={() => setSelectedImage(i)}
      onLoad={(e) => handleImageLoad(e)}
    />
  ));

  return (
    <div
      ref={imageViewerRef}
      className={`sticky  left-0  z-auto h-fit ${
        filter.filterShouldStick ? "top-0" : "top-[60px]"
      }`}
    >
      <div>
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
    </div>
  );
};

export default ImageViewer;
