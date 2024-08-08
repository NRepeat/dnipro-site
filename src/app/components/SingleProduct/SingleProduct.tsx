import React, { FC, Suspense } from "react";
import ImageViewer from "./ImageViewer";
import Info from "./Info";
import ProductsCarousel from "../CompleteLook/CompleteLook";
import productsAPIactions from "@/app/services/products";
import { notFound } from "next/navigation";
import prisma from "@/app/utils/prisma";

type ProductType = {
  id: string;
  property?: string;
};

const SingleProduct: FC<ProductType> = async ({ id, property }) => {
  console.log("🚀 ~ constSingleProduct:FC<ProductType>= ~ property:", property);
  const product = await prisma.product.findUnique({
    where: { uid: id },
    include: { category: true, manufacturer: true, variants: true },
  });
  if (!product) {
    return notFound();
  }
  const products = await productsAPIactions.getAllProducts({
    limit: 5,
    skip: 0,
  });

  const selectedProduct = product.variants.find(
    (variant) => variant.color === property
  );

  const images: string[] = [
    ...product.variants.flatMap((variant) => variant.images as string[]),
  ];
  return (
    <div className="flex w-full flex-col ">
      <div className="flex gap-8 justify-between  pb-12">
        <ImageViewer
          images={
            selectedProduct ? (selectedProduct.images as string[]) : images
          }
        />
        <Info product={selectedProduct ? selectedProduct : product} />
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
