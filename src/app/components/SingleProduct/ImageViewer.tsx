"use client";
import { useRef } from "react";
import VerticalEmblaCarousel from "../ui/Slider/VerticalSlider/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import { useSelector } from "react-redux";
import { FilterStateType } from "@/app/store/slice/filterSlice";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";

const ImageViewer = ({ images }: { images: string[] }) => {
  const imageViewerRef = useRef(null);
  const OPTIONS: EmblaOptionsType = {};
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

  const verticalImages = images.map((image, i) => (
    <Image
      key={i}
      width={1300}
      height={1300}
      alt="Card example background"
      className="z-0 h-full object-cover  transition-all rounded-none"
      src={image}
    />
  ));

  return (
    <div
      ref={imageViewerRef}
      className={`sticky  left-0  z-auto h-fit ${
        filter.filterShouldStick ? "top-0" : "top-[60px]"
      }`}
    >
      <div className={`w-[600px] transition-opacity duration-500 `}>
        <VerticalEmblaCarousel options={OPTIONS} slides={verticalImages} />
      </div>
    </div>
  );
};

export default ImageViewer;
