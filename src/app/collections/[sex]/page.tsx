import GridWrapper from "@/app/components/ui/Collection/GridWrapper";
import productsAPIactions from "@/app/services/products";
import React from "react";

const page = async () => {
  const INITIAL_NUMBER_OF_PRODUCTS = 12;
  console.log(
    "🚀 ~ page ~ INITIAL_NUMBER_OF_PRODUCTS:",
    INITIAL_NUMBER_OF_PRODUCTS
  );

  const products = await productsAPIactions.getAllProducts({
    limit: 12,
    skip: 0,
  });
  console.log("🚀 ~ page ~ products:", products.data);

  return <GridWrapper productsInitialData={products.data} />;
  // return <>test</>;
};

export default page;
