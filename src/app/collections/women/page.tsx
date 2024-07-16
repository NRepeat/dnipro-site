import { getUsers } from "@/app/actions/getProducts";
import CollectionGrid from "@/app/components/ui/Collection/Collection";
import React from "react";

const page = async () => {
  const INITIAL_NUMBER_OF_PRODUCTS = 10;

  const products = await getUsers(INITIAL_NUMBER_OF_PRODUCTS, 0);

  return <CollectionGrid products={products} />;
};

export default page;
