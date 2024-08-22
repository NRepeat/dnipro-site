"use client";
import { ProductItem } from "@prisma/client";
import { cx } from "class-variance-authority";
import Image from "next/image";
import React, { FC, useState } from "react";
import SliderCustom from "../ui/Slider/EmblaCarousel";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export type ImageVariant = {
  imageUrl: string;
  id: number;
  color: string;
};
type ColorPickerProps = {
  variants: ProductItem[];
  variantId: number;
};
const ColorPicker: FC<ColorPickerProps> = ({ variants, variantId }) => {
  const variantData = variants.map((variant) => {
    const variantImageThumbnail = variant.images as string[];
    const imageVariants: ImageVariant = {
      imageUrl: variantImageThumbnail[0],
      id: variant.id,
      color: variant.color,
    };
    return imageVariants;
  });
  const handleSelectColor = (variant: ProductItem) => {};

  const slides = variantData.map((variant, i) => (
    <Link href={`${variant.id}`} key={variant.id}>
      <Image
        onClick={() => handleSelectColor(variants[i])}
        className={cx("border-2  border-black", {
          "border-t-2 border-blue-500": variant.id === variantId,
        })}
        src={variant.imageUrl}
        width={300}
        height={300}
        alt="Image"
      />
      <p
        className={cx("border-t-2 border-t-white border-black", {
          "border-t-2 border-black": variant.id === variantId,
        })}
      >
        {variant.color}
      </p>
    </Link>
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
      </div>
    </div>
  );
};

export default ColorPicker;
