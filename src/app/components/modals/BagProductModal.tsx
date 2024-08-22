"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Product, ProductItem } from "@prisma/client";
import { Title } from "@radix-ui/react-dialog";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { FC, useState } from "react";
import ProductImage from "../ui/ProductImage/ProductImage";
import ColorPicker, { ImageVariant } from "../SingleProduct/ColorPicker";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CartStateType } from "@/app/store/slice/cartSlice";
import { useAppDispatch } from "@/app/store/store";
import cartThunk from "@/app/store/thunk/cartThunk";
import { useSelector } from "react-redux";
import { FullProduct, FullProductItem } from "@/app/types/types";

type BagProductModal = {
  product: FullProductItem;
  className?: string;
};

const BagProductModal: FC<BagProductModal> = ({ product, className }) => {
  const router = useRouter();

  return (
    <Dialog open={!!product} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          className,
          "w-[300px] sm:w-[450px] lg:w-[1024px] xl:w-[75%] max-w-[1524px] max-h-[700px] lg:max-h-full"
        )}
        title={product.name}
      >
        <BagModalForm
          details={product.product.description || "asd"}
          uid={product.uid}
          brand={product.product.manufacturer.name}
          variants={product.product.variants}
        />
      </DialogContent>
    </Dialog>
  );
};

export default BagProductModal;

type BagModalFormProps = {
  brand: string;
  variants: ProductItem[];
  details: string;
  uid: string;
  className?: string;
};

export const BagModalForm: FC<BagModalFormProps> = ({
  details,
  variants,
  className,
  brand,
  uid,
}) => {
  const [selectedVariantId, setVariantId] = useState<number>(variants[0].id);
  const dispatch = useAppDispatch();
  const variantsData = variants.map((variant) => {
    const variantImageThumbnail = variant.images as string[];
    const imageVariants: ImageVariant = {
      imageUrl: variantImageThumbnail[0],
      id: variant.id,
      color: variant.color,
    };
    return imageVariants;
  });
  const selectedVariant = variants.find(
    (variant) => variant.id === selectedVariantId
  );
  const selectedImage = selectedVariant && (selectedVariant.images as string[]);
  const onAddProduct = (id: number) => {
    dispatch(
      cartThunk.thunk.createCartItem({ productItemId: id, quantity: 1 })
    );
  };
  return (
    <>
      {selectedVariant && (
        <div
          className={cn(
            "flex flex-1 gap-4 lg:gap-16 xl:gap-32 flex-col lg:flex-row ",
            className
          )}
        >
          {selectedImage && (
            <div className="flex items-center  justify-center xl:justify-start">
              <ProductImage
                imageUrl={selectedImage[0]}
                className="w-auto max-w-[300px]  h-auto lg:max-w-full lg:min-w-[400px]"
              />
            </div>
          )}
          <div className="flex flex-col  w-full">
            <div>
              <p className="text-sm lg:text-xl">{brand}</p>
              <div className="py-8 flex flex-col gap-4">
                <p className="text-lg border-t-2 lg:text-2xl font-bold">
                  Details
                </p>

                <p className="lg:text-lg">{details}</p>
                <p className="border-b-2 lg:text-lg">
                  Color: {selectedVariant.color}
                </p>
              </div>

              <p className="pb-8">${selectedVariant.price} USD</p>
            </div>
            {/* <ColorPicker
              imageVariants={variantsData}
              selectImageId={setVariantId}
              selectedImageVariant={selectedVariantId}
            /> */}
            <div className="flex gap-12">
              <Button variant={"outline"} className="w-[150px] bg-green-800">
                Make order
              </Button>
            </div>
            <Link
              href={`/product/${uid}/item/${selectedVariant.id}`}
              className="pt-4 underline cursor-pointer"
            >
              View full information
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
