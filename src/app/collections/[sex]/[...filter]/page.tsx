import { getFilteredProducts, getUsers } from "@/app/actions/getProducts";
import GridWrapper from "@/app/components/ui/Collection/GridWrapper";
import React from "react";

const page = async ({ params }: { params: { filter: string[] } }) => {
  const products = await getFilteredProducts(params.filter[0]);
  console.log("🚀 ~ page ~ products:", products);

  return <GridWrapper productsInitialData={products} />;
};

export default page;
