import BagProductModal from "@/app/components/modals/BagProductModal";
import cartAPIactions from "@/app/services/cart";
import prisma from "@/app/utils/prisma";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { notFound, permanentRedirect } from "next/navigation";
import React from "react";

const ModalProductPage = async ({ params }: { params: { itemId: string } }) => {
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
  // const cookieHeader = cookies();
  // const cartToken = cookieHeader.get("cart")?.value;
  // if (cartToken) {
  //   const userCart = (await cartAPIactions.fetchCart({ cartToken })).data;
  //   console.log("🚀 ~ ModalProductPage ~ userCart:", userCart);
  //   const findProduct = userCart.cart.products.find(
  //     (product) => product.productItemId === item.id
  //   );
  //   if (userCart && findProduct) {
  //     revalidatePath(`/product/buy/${item.id}`);
  //     permanentRedirect("/bag/preview");
  //   }
  // }

  return <BagProductModal product={item} />;
};

export default ModalProductPage;
