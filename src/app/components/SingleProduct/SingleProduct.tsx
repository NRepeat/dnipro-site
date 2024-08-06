import React, { FC, Suspense } from "react";
import ImageViewer from "./ImageViewer";
import Info from "./Info";
import ProductsCarousel from "../CompleteLook/CompleteLook";
import productsAPIactions from "@/app/services/products";
import { notFound } from "next/navigation";

type ProductType = {
  // product: {
  //   title: string;
  //   price: string;
  //   discount: string;
  //   thumbnail: string;
  //   images: string[];
  //   id: string;
  // };
  id: string;
};

const SingleProduct: FC<ProductType> = async ({ id }) => {
  const product = await productsAPIactions.getProduct({ id });
  if (!product) {
    return notFound();
  }
  console.log("🚀 ~ constSingleProduct:FC<ProductType>= ~ product:", product);
  const products = await productsAPIactions.getAllProducts({
    limit: 5,
    skip: 0,
  });
  const images: string[] = [
    ...product.data.variants.flatMap((variant) => variant.images as string[]),
  ];

  return (
    <div className="flex w-full flex-col ">
      <div className="flex gap-8 justify-between  pb-12">
        <ImageViewer images={images} />
        <Info product={product.data} />
      </div>
      <ProductsCarousel
        products={products.data}
        title="COMPLETE THE LOOK"
        titleMargin={12}
      />
    </div>
  );
};

export default SingleProduct;
