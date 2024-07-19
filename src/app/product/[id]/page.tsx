import { getProduct } from "@/app/actions/getProducts";
import React from "react";

const SinglePage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const product = await getProduct(id);
  return <div>page {product.title}</div>;
};

export default SinglePage;
