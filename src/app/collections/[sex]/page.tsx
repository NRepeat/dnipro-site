import GridWrapper from "@/app/components/ui/Collection/GridWrapper";
import productsAPIactions from "@/app/services/products";
import React from "react";

const page = async ({ params }: { params: { filter: string[] } }) => {
  const products = await productsAPIactions.getAllProducts({
    limit: 10,
    skip: 0,
  });
  return <GridWrapper productsInitialData={products.data} />;
};

export default page;
