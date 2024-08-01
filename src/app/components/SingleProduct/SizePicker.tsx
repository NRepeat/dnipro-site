"use client";
import {
  ProductStateType,
  setProductId,
  setSize,
} from "@/app/store/slice/productSlice";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";

import React from "react";
import { useDispatch, useSelector } from "react-redux";

const SizePicker = ({
  sizes,
  productId,
}: {
  sizes: any[];
  productId: number;
}) => {
  // const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const dispatch = useDispatch();
  const product = useSelector(
    (state: { product: ProductStateType }) => state.product
  );
  const handleSetSize = (size: string | number) => {
    dispatch(setSize(size));
    dispatch(setProductId(productId));
  };
  return (
    <div className="py-4">
      <div className="inline-flex justify-between w-full items-center">
        <p className="text-sm capitalize">CHOOSE SIZE</p>
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="ghost" className="p-0 gap-0 border-1">
            Size guid
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>Size guid</DialogHeader>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
            hendrerit risus, sed porttitor quam.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
            hendrerit risus, sed porttitor quam.
          </p>
          <p>
            Magna exercitation reprehenderit magna aute tempor cupidatat
            consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
            incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua
            enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur
            esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa
            deserunt nostrud ad veniam.
          </p>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="flex gap-2 ">
        {sizes.map((size) => (
          <Button
            key={size}
            className={`${
              product.size === size && "border-1 border-sky-800"
            } border-1`}
            onClick={() => handleSetSize(size)}
          >
            {size}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SizePicker;
