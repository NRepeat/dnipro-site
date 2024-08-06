import ProductBagCard from "@/app/components/Bag/ProductBagCard";
import prisma from "@/app/utils/prisma";
import { notFound } from "next/navigation";
import React from "react";

const ModalProductPage = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const product = await prisma.product.findUnique({ where: { uid: id } });
  console.log("🚀 ~ product:", product);
  if (!product) {
    return notFound();
  }
  return <ProductBagCard product={product} />;
};

export default ModalProductPage;
