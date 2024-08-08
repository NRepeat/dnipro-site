import { cn } from "@/lib/utils";
import { type Prisma } from "@prisma/client";
import Image from "next/image";
import React, { FC } from "react";

type ProductImageProps = {
  imageUrl: Prisma.JsonValue;
  size?: 30 | 40 | 50;
  className?: string;
};

const ProductImage: FC<ProductImageProps> = ({ className, imageUrl, size }) => {
  return (
    <div className={cn("flex   object-cover ", className)}>
      <Image
        src={imageUrl as string}
        alt="Logo"
        width={400}
        height={450}
        className={cn("relative transition-all  duration-300 z-10", {
          "w-[300px] h-[300px]": size === 30,
          "w-[400px] h-[400px]": size === 40,
          "w-[500px] h-[500px]": size === 50,
        })}
      />
    </div>
  );
};

export default ProductImage;
