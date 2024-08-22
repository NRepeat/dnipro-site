import BagProductModal from "@/app/components/modals/BagProductModal";
import cartAPIactions from "@/app/services/cart";
import prisma from "@/app/utils/prisma";
import { cookies } from "next/headers";
import { notFound, permanentRedirect } from "next/navigation";
import React from "react";

const ModalProductPage = async ({ params }: { params: { id: string } }) => {
  const id = Number(params.id);
  const item = await prisma.productItem.findUnique({
    where: { id: Number(id) },
    include: {
      product: {
        include: { variants: true, category: true, manufacturer: true },
      },
    },
  });
  if (!item) {
    return notFound();
  }
  const cookieHeader = cookies();
  const cartToken = cookieHeader.get("cart")?.value;
  if (cartToken) {
    const userCart = (await cartAPIactions.fetchCart({ cartToken })).data;
    const findProduct = userCart.cart.products.find(
      (product) => product.productItemId === item.id
    );
    console.log("🚀 ~ ModalProductPage ~ findProduct:", findProduct);
    if (userCart && findProduct) {
      permanentRedirect("/bag/preview");
    }
  }

  return <BagProductModal product={item} />;
};

export default ModalProductPage;
