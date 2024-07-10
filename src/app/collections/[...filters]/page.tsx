import CollectionGrid from "@/app/components/ui/Collection/Collection";
import React from "react";

const page = async () => {
  const productsData = await fetch("https://dummyjson.com/products");
  const products = await productsData.json().then((data) => data.products);
  return (
    <div className="w-full h-full overflow-y-scroll ">
      <CollectionGrid products={products} />;
    </div>
  );
};

export default page;
