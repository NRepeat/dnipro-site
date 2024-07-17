import { getUsers } from "@/app/actions/getProducts";
import GridWrapper from "@/app/components/ui/Collection/GridWrapper";
import React from "react";

const page = async () => {
  const INITIAL_NUMBER_OF_PRODUCTS = 12;

  const products = await getUsers(INITIAL_NUMBER_OF_PRODUCTS, 0);

  return <GridWrapper productsInitialData={products} />;
};

export default page;
