import React from "react";
import CollectionCard from "./Card";
import GridWrapper from "./GridWrapper";

const CollectionGrid = ({ products }: { products: any[] }) => {
  let productId: string[] = [];
  const mapCollectionCard = products.map((product) => {
    productId.push(product.title.replace(/[\s']/g, "-"));
    return <CollectionCard key={product.title} product={product} />;
  });

  return <GridWrapper productIds={productId}>{mapCollectionCard}</GridWrapper>;
};

export default CollectionGrid;
