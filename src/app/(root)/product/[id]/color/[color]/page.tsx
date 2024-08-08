import SingleProduct from "@/app/components/SingleProduct/SingleProduct";
import React, { Suspense } from "react";

const SinglePage = async ({
  params,
}: {
  params: { id: string; color: string };
}) => {
  const { id, color } = params;
  return (
    <Suspense fallback="loading">
      <SingleProduct id={id} property={color} />
    </Suspense>
  );
};

export default SinglePage;
