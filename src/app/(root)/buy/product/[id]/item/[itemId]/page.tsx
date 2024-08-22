import BagProductModal from "@/app/components/modals/BagProductModal";
import cartAPIactions from "@/app/services/cart";
import prisma from "@/app/utils/prisma";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { permanentRedirect } from "next/navigation";
import React from "react";

const ModalProductPage = async ({
  params,
}: {
  params: { id: string; itemId: string };
}) => {
  return permanentRedirect(`/product/${params.id}/item/${params.itemId}`);
};

export default ModalProductPage;
