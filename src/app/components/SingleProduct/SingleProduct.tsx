"use client";
import React, { FC, useEffect, useState } from "react";
import ImageViewer from "./ImageViewer";
import Info from "./Info";
import { Product, ProductItem } from "@prisma/client";
import { FullProduct, FullProductItem } from "@/app/types/types";
import ProductsCarousel from "../CompleteLook/CompleteLook";

type ProductType = {
  item: FullProductItem;
  variantId: number;
};

const SingleProduct: FC<ProductType> = ({ item, variantId }) => {
  const images = item.images as string[];
  return (
    <div className="flex w-full flex-col">
      <div className="flex pb-32 gap-12 justify-between px-4">
        <ImageViewer images={images} />
        <Info item={item} variantId={variantId} />
      </div>
    </div>
  );
};

export default SingleProduct;
