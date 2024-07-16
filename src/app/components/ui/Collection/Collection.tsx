import React from "react";
import CollectionCard from "./Card";
import GridWrapper from "./GridWrapper";

const CollectionGrid = ({ products }: { products: any[] }) => {
  let productId: string[] = [];

  return <GridWrapper products={products}></GridWrapper>;
};

export default CollectionGrid;
