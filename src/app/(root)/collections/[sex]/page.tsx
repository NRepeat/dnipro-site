import GridWrapper from "@/app/components/ui/Collection/GridWrapper";
import { findProduct } from "@/app/lib/find-products";
import productsAPIactions from "@/app/services/products";
import { GetSearchParams } from "@/app/types/types";
import React from "react";

const page = async ({ searchParams }: { searchParams: GetSearchParams }) => {
  const products = await findProduct(searchParams);
  return <GridWrapper productsInitialData={products} />;
};

export default page;
