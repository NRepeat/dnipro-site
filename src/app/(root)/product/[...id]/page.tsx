import SingleProduct from "@/app/components/SingleProduct/SingleProduct";
import prisma from "@/app/utils/prisma";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";

const SinglePage = async ({
  params,
}: {
  params: { id: [id: string, variantId: string] };
}) => {
  const [id, variantId] = params.id;
  const product = await prisma.product.findUnique({
    where: { uid: id },
    include: {
      category: true,
      manufacturer: true,
      variants: true,
    },
  });
  console.log("🚀 ~ SinglePage ~ product:", product);
  if (!product) {
    return notFound();
  }
  return (
    <Suspense fallback="loading">
      <SingleProduct product={product} variantId={variantId} />
    </Suspense>
  );
};

export default SinglePage;
