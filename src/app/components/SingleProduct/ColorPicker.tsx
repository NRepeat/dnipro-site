"use client";
import { ProductItem } from "@prisma/client";
import { cx } from "class-variance-authority";
import Image from "next/image";
import React, { FC } from "react";
import SliderCustom from "../ui/Slider/EmblaCarousel";

export type ImageVariant = {
  imageUrl: string;
  uid: string;
  color: string;
};
type ColorPickerProps = {
  imageVariants: ImageVariant[];
  selectedImageVariant: string;
  selectImageId: React.Dispatch<React.SetStateAction<string>>;
};
const ColorPicker: FC<ColorPickerProps> = ({
  imageVariants,
  selectImageId,
  selectedImageVariant,
}) => {
  const handleSelectColor = (uid: string) => {
    selectImageId(uid);
  };
  const slides = imageVariants.map((variant) => (
    <div key={variant.uid}>
      <Image
        onClick={() => handleSelectColor(variant.uid)}
        className={cx(`transition-all  border-2`)}
        src={variant.imageUrl}
        width={300}
        height={300}
        alt="Image"
      />
      <p
        className={cx("border-t-2 border-t-white", {
          "border-t-2 border-t-black": variant.uid === selectedImageVariant,
        })}
      >
        {variant.color}
      </p>
    </div>
  ));
  return (
    <div className="py-4 pb-6 w-full border-t-2">
      <p className="text-lg pb-2">CHOOSE COLOR</p>
      <div className="">
        <SliderCustom
          slidePerView={2}
          slideStyle="lg:max-w-[100px] max-w-[90px] "
          options={{ slidesToScroll: "auto" }}
          slides={slides}
        />
        {/* {imageVariants.map((variant) => (
          <Image
            onClick={() => handleSelectColor(variant.uid)}
            className={cx(
              `w-[150px]  transition-all  border-2
            }`,
              { "border-2 border-black": variant.uid === selectedImageVariant }
            )}
            src={variant.imageUrl}
            key={variant.uid}
            width={300}
            height={300}
            alt="Image"
          />
        ))} */}
      </div>
    </div>
  );
};

export default ColorPicker;
