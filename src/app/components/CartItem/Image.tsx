import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { FC } from "react";
type Props = {
  src: string;
  className?: string;
};
const ImageItem: FC<Props> = ({ src, className }) => {
  return (
    <Image
      className={cn("w-[60px] h-auto object-cover", className)}
      width={60}
      height={60}
      src={src}
      alt="item-image"
    />
  );
};

export default ImageItem;
