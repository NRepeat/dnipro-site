import { getProduct } from "@/app/actions/getProducts";
import SingleProduct from "@/app/components/SingleProduct/SingleProduct";
import React from "react";

const SinglePage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const product = await getProduct(id);
  return (
    <div>
      <SingleProduct product={product} />
    </div>
  );
};

export default SinglePage;
