import React, { FC, useRef, useState } from "react";
import Pag from "./Pag";
import Link from "next/link";
import Image from "next/image";
import { FullProduct } from "@/app/services/products";

type CollectionCardProps = {
  product: FullProduct;
};
const divideIntoThreeParts = (number: number, stepK: number) => {
  const step = Math.ceil(number / stepK);
  let ranges = [];

  for (let i = 0; i < number; i += step) {
    let end = i + step;
    if (end > number) end = number;
    ranges.push([i, end]);
  }

  return ranges;
};

const CollectionCard: FC<CollectionCardProps> = ({ product }) => {
  // const [images, setImages] = useState<string[]>([
  //   product.thumbnail,
  //   ...product.images,
  // ]);
  // const [imageIndex, setImageIndex] = useState<number>(0);
  // const imageRefs = useRef<HTMLImageElement | null>(null);

  // const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  //   const target = e.currentTarget;
  //   const mouseX = e.nativeEvent.offsetX;

  //   const targetWidth = target.clientWidth;
  //   const targetRange = divideIntoThreeParts(targetWidth, images.length);

  //   for (let i = 0; i < targetRange.length; i++) {
  //     const rangeStart = targetRange[i][0];
  //     const rangeEnd = targetRange[i][1];

  //     if (mouseX >= rangeStart && mouseX < rangeEnd) {
  //       break;
  //     }
  //   }
  // };

  const images: string[] = product.variants.flatMap(
    (variant) => variant.images as string
  );
  return (
    <Link href={`/product/${product.id}`} prefetch>
      <div
        className={`container  transition-transform-background-disable w-full rounded-none cursor-pointer  border-1 hover:border-black border-b-2`}
      >
        {/* <div>
          {images.length > 0 && (
            <Pag total={images.length} index={imageIndex} />
          )}
        </div> */}
        <div className="flex w-full items-center justify-center overflow-hidden min-h-[300px]">
          <Image
            width={300}
            height={300}
            src={images[0]}
            alt="image"
            className={`w-full h-auto object-cover rounded-none  `}
          />
        </div>
        <div className="justify-between">
          <p className="text-medium">{product.title}</p>
        </div>
      </div>
    </Link>
  );
};

export default CollectionCard;
