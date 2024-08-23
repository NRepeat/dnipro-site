import React, { FC, useRef, useState } from "react";
import Pag from "./Pag";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FullProduct } from "@/app/types/types";

type CollectionCardProps = {
  product: FullProduct;
};
// const divideIntoThreeParts = (number: number, stepK: number) => {
//   const step = Math.ceil(number / stepK);
//   let ranges = [];

//   for (let i = 0; i < number; i += step) {
//     let end = i + step;
//     if (end > number) end = number;
//     ranges.push([i, end]);
//   }

//   return ranges;
// };

const CollectionCard: FC<CollectionCardProps> = ({ product }) => {
  const images: string[] = product.variants.flatMap(
    (variant) => variant.images as string
  );
  return (
    <div className="flex flex-col">
      <Link
        href={`/product/${product.uid}/item/${product.variants[0].id}`}
        prefetch
      >
        <div
          className={`container  transition-transform-background-disable w-full rounded-none cursor-pointer  border-1 hover:border-black border-b-2`}
        >
          <div className="flex w-full items-center justify-center overflow-hidden min-h-[300px]">
            <Image
              width={300}
              height={300}
              src={images[0]}
              alt="image"
              className={`w-full h-auto object-cover rounded-none  `}
            />
          </div>
        </div>
      </Link>
      <div className="justify-between flex">
        <p className="text-medium">{product.title}</p>
        <Link
          href={`/buy/product/${product.id}/item/${product.variants[0].id}`}
          className="w-[150px]"
        >
          Buy it now
        </Link>
      </div>
    </div>
  );
};

export default CollectionCard;
