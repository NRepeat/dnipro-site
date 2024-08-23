import { CartStateType } from "@/app/store/slice/cartSlice";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import React from "react";
import { IoBag } from "react-icons/io5";
import { useSelector } from "react-redux";

const CartButton = () => {
  // const cartState = useSelector((state: { cart: CartStateType }) => state.cart);
  return (
    <div className="flex justify-center items-center">
      <IoBag className="w-5 h-5" />
    </div>
  );
};

export default CartButton;
