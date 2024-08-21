"use client";
import React, { FC } from "react";
import ImageItem from "./Image";
import Info from "./Info";
import CountButton from "../ui/CountButton";
import Price from "./Price";
import { cn } from "@/lib/utils";
import { Divider } from "@nextui-org/react";
import { MdDelete } from "react-icons/md";

export interface CartItemProps {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  quantity: number;
  details: { color: string; name: string; size: string };
}

interface Props extends CartItemProps {
  onClickCountButton: (
    id: number,
    quantity: number,
    type: "plus" | "minus"
  ) => void;
  onClickDeleteButton: (id: number) => void;
  className?: string;
}
const CartItem: FC<Props> = ({
  className,
  details,
  id,
  imageUrl,
  name,
  price,
  quantity,
  onClickCountButton,
  onClickDeleteButton,
}) => {
  return (
    <div className={cn("flex bg-white p-5 gap-6", className)}>
      <ImageItem src={imageUrl} />
      <div className="flex-1 flex flex-col">
        <Info color={details.color} name={details.name} size={details.size} />
        <div className="flex items-center justify-between ">
          <CountButton
            onClick={(type) => onClickCountButton(id, quantity, type)}
            value={quantity}
          />
          <div className="flex gap-3 items-center">
            <Price value={price} />
            <MdDelete
              className="cursor-pointer"
              onClick={() => onClickDeleteButton(id)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
