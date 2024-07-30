import { getFilteredProducts } from "@/app/actions/products";
import GridWrapper from "@/app/components/ui/Collection/GridWrapper";
import React from "react";

const page = async ({ params }: { params: { filter: string[] } }) => {
  const products = await getFilteredProducts(params.filter[0]);

  return <GridWrapper productsInitialData={products} />;
};

export default page;
