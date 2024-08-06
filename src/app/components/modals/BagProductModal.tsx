"use client";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Product, ProductItem } from "@prisma/client";
import { Title } from "@radix-ui/react-dialog";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { FC } from "react";
import ProductImage from "../ui/ProductImage/ProductImage";
import ColorPicker from "../SingleProduct/ColorPicker";
import { FullProduct } from "@/app/services/products";

type BagProductModal = {
  product: FullProduct;
  className?: string;
};

const BagProductModal: FC<BagProductModal> = ({ product, className }) => {
  console.log("🚀 ~ product:", product);
  const router = useRouter();
  return (
    <Dialog open={!!product} onOpenChange={() => router.back()}>
      <DialogContent className={cn(className)}>
        <DialogHeader>{product.title}</DialogHeader>
        <BagModalForm
          details={product.description || "asd"}
          imageUrl={product.thumbnail}
          title={product.title}
          variants={product.variants}
        />
      </DialogContent>
    </Dialog>
  );
};

export default BagProductModal;

export const BagModalContent = () => {
  return <></>;
};

type BagModalFormProps = {
  title: string;
  imageUrl: string;
  variants: ProductItem[];
  details: string;
  className?: string;
};

export const BagModalForm: FC<BagModalFormProps> = ({
  details,
  imageUrl,
  title,
  variants,
  className,
}) => {
  return (
    <div className={cn("flex flex-1", className)}>
      <ProductImage imageUrl={imageUrl} size={30} />
      <div>
        <p>{details}</p>
        <ColorPicker variants={variants} />
      </div>
    </div>
  );
};
