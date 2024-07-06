import React from "react";
import CollectionCard from "./Card";

const CollectionGrid = ({ products }: { products: any[] }) => {
  const mapCollectionCard = products.map((product) => (
    <CollectionCard key={product.title} product={product} />
  ));

  return (
    <div className="grid grid-flow-row-dense grid-cols-4 gap-2">
      {mapCollectionCard}
    </div>
  );
};

export default CollectionGrid;
