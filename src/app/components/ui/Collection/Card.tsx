"use client";
import { useGSAP } from "@gsap/react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  usePagination,
} from "@nextui-org/react";
import gsap from "gsap/all";
import React, { FC, useRef, useState } from "react";
import Pag from "./Pag";

type CollectionCardProps = {
  product: {
    title: string;
    price: string;
    discount: string;
    thumbnail: string;
    images: string[];
  };
};
const divideIntoThreeParts = (number: number, stepK: number) => {
  const step = Math.ceil(number / stepK);
  console.log("🚀 ~ divideIntoThreeParts ~ step:", step);
  let ranges = [];

  for (let i = 0; i < number; i += step) {
    let end = i + step;
    if (end > number) end = number;
    ranges.push([i, end]);
  }

  return ranges;
};

const CollectionCard: FC<CollectionCardProps> = ({ product }) => {
  const [images, setImages] = useState<string[]>([
    product.thumbnail,
    ...product.images,
  ]);
  const [imageIndex, setImageIndex] = useState<number>(0);
  const imageRefs = useRef<HTMLImageElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.currentTarget;
    const mouseX = e.nativeEvent.offsetX;

    const targetWidth = target.clientWidth;
    const targetRange = divideIntoThreeParts(targetWidth, images.length);

    for (let i = 0; i < targetRange.length; i++) {
      const rangeStart = targetRange[i][0];
      const rangeEnd = targetRange[i][1];

      if (mouseX >= rangeStart && mouseX < rangeEnd) {
        setImageIndex(i);
        break;
      }
    }
  };

  return (
    <Card
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setImageIndex(0)}
      className={`container  transition-transform-background-disable w-full rounded-none cursor-pointer  border-1 hover:border-black`}
    >
      <CardHeader>
        {images.length > 0 && <Pag total={images.length} index={imageIndex} />}
      </CardHeader>
      <CardBody className="flex w-full items-center justify-center overflow-hidden min-h-[400px]">
        <Image
          ref={imageRefs}
          src={images[imageIndex] ? images[imageIndex] : images[0]}
          alt="image"
          className={`w-full h-auto object-cover rounded-none  `}
        />
      </CardBody>
      <CardFooter className="justify-between">
        <p className="text-medium">{product.title}</p>
        <p>{product.price} UAH</p>
      </CardFooter>
    </Card>
  );
};

export default CollectionCard;
