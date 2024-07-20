import React, { FC } from "react";
import ImageViewer from "./ImageViewer";
import Info from "./Info";
import AlsoLike from "../AlsoLike/AlsoLike";

type ProductType = {
  product: {
    title: string;
    price: string;
    discount: string;
    thumbnail: string;
    images: string[];
    id: string;
  };
};

const SingleProduct: FC<ProductType> = ({ product }) => {
  const images: string[] = [product.thumbnail, ...product.images];

  return (
    <div className="flex w-full">
      <ImageViewer images={images} />
      <Info />
      <AlsoLike />
    </div>
  );
};

export default SingleProduct;
