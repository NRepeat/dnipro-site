import { getProduct } from "@/app/actions/getProducts";
import SingleProduct from "@/app/components/SingleProduct/SingleProduct";
import React, { Suspense } from "react";

const SinglePage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return (
    <Suspense fallback="loading">
      <SingleProduct id={id} />
    </Suspense>
  );
};

export default SinglePage;
