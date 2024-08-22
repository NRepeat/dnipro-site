import SingleProduct from "@/app/components/SingleProduct/SingleProduct";
import prisma from "@/app/utils/prisma";
import { notFound } from "next/navigation";
import React from "react";

const ItemPage = async ({ params }: { params: { itemId: string } }) => {
  const itemId = Number(params.itemId);
  const item = await prisma.productItem.findFirst({
    where: { id: itemId },
    include: {
      product: {
        include: { manufacturer: true, category: true, variants: true },
      },
    },
  });
  if (!item) {
    return notFound();
  }
  return <SingleProduct item={item} variantId={itemId} />;
};

export default ItemPage;
