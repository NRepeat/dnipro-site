import Link from "next/link";
import React, { FC } from "react";
import SliderCustom from "../ui/Slider/EmblaCarousel";
import Image from "next/image";
import { Product } from "@prisma/client";

type ProductsCarousel = {
  products: any[];
  title: string;
  titleMargin: number;
};

const ProductsCarousel: FC<ProductsCarousel> = ({
  products,
  title,
  titleMargin,
}) => {
  let slides = products.map((product) => (
    <CompleteLookCard product={product} key={product.id} />
  ));
  let cashedArr = products.slice();
  let chunkedArr = [];
  let start = 0;
  let count = 0;
  const size = 5;
  while (count < cashedArr.length) {
    const removedItems = products.splice(start, size);
    count += size;
    chunkedArr.push(
      removedItems.map((data) => (
        <CompleteLookCard product={data} key={data.id} />
      ))
    );
  }

  return (
    <div>
      <p
        className={`${
          titleMargin ? `mb-${titleMargin}` : ""
        } text-center font-bold text-xl`}
      >
        {title}
      </p>
      <SliderCustom slides={chunkedArr}></SliderCustom>
    </div>
  );
};
export default ProductsCarousel;

const CompleteLookCard = ({ product }: { product: Product }) => {
  console.log("🚀 ~ CompleteLookCard ~ product:", product.thumbnail);
  return (
    <Link href={`/product/${product.id}`}>
      <div className="w-full">
        <Image
          width={300}
          height={300}
          alt="Card example background"
          className="z-0 h-auto w-full object-cover  transition-all rounded-none"
          src={product.thumbnail}
        />
        <p>brand</p>
        <p>price</p>
      </div>
    </Link>
  );
};
