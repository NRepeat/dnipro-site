"use client";
import React, { FC, useEffect, useState } from "react";
import ImageViewer from "./ImageViewer";
import Info from "./Info";
import { type FullProduct } from "@/app/services/products";
import { ProductItem } from "@prisma/client";

type ProductType = {
  product: FullProduct;
  variantId?: string;
};

const SingleProduct: FC<ProductType> = ({ product, variantId }) => {
  const [selectedVariant, setSelectedVariant] = useState<ProductItem>(
    product.variants[0]
  );
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  useEffect(() => {
    if (variantId) {
      const productVariant = product.variants.find(
        (variant) => variant.id === Number(variantId)
      );
      if (productVariant) {
        setSelectedVariant(productVariant);
        setSelectedImages(productVariant.images as string[]);
      }
    }
  }, [variantId, product.variants]);
  useEffect(() => {
    if (selectedVariant) {
      setSelectedImages(selectedVariant?.images as string[]);
    }
  }, [selectedVariant]);

  return (
    <div className="flex w-full flex-col ">
      <div className="flex  pb-32 gap-12 justify-between px-4">
        <ImageViewer images={selectedImages} />
        <Info
          product={product}
          variant={selectedVariant}
          setSelectedVariant={setSelectedVariant}
        />
      </div>
      {/* <ProductsCarousel
        products={products.data}
        title="COMPLETE THE LOOK"
        titleMargin={12}
      /> */}
    </div>
  );
};

export default SingleProduct;
