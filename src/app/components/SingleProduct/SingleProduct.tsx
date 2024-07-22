import React, { FC, Suspense } from "react";
import ImageViewer from "./ImageViewer";
import Info from "./Info";
import AlsoLike from "../AlsoLike/AlsoLike";
import { getProduct, getUsers } from "@/app/actions/getProducts";
import BreadcrumbsCustom from "../ui/BreadcrumbsCustom/BreadcrumCustome";
import CompleteLook from "../CompleteLook/CompleteLook";
import ProductsCarousel from "../CompleteLook/CompleteLook";

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
  const product = await getProduct(id);
  const products = await getUsers(5, 0);
  const images: string[] = [product.thumbnail, ...product.images];

  return (
    <div className="flex w-full flex-col ">
      <div className="flex gap-8 justify-between pr-32 pb-12">
        <ImageViewer images={images} />
        <Info product={product} />
      </div>
      <ProductsCarousel
        products={products}
        title="COMPLETE THE LOOK"
        titleMargin={12}
      />
      <ProductsCarousel
        products={products}
        title="SIMILAR PRODUCTS"
        titleMargin={12}
      />
    </div>
  );
};

export default SingleProduct;
