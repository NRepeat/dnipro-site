import React from "react";
import ImageViewer from "./ImageViewer";
import Info from "./Info";
import AlsoLike from "../AlsoLike/AlsoLike";

const SingleProduct = () => {
  return (
    <div className="flex w-full">
      <ImageViewer />
      <Info />
      <AlsoLike />
    </div>
  );
};

export default SingleProduct;
