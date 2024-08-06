import BagProductModal from "@/app/components/modals/BagProductModal";
import prisma from "@/app/utils/prisma";
import { notFound } from "next/navigation";
import React from "react";

const ModalProductPage = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const product = await prisma.product.findUnique({
    where: { uid: id },
    include: { variants: true, category: true, manufacturer: true },
  });
  if (!product) {
    return notFound();
  }
  return <BagProductModal product={product} />;
};

export default ModalProductPage;
