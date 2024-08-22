import Link from "next/link";
import React from "react";
import { IoBag } from "react-icons/io5";

const CartButton = () => {
  return (
    <div className="flex justify-center items-center">
      <IoBag className="w-5 h-5" />
    </div>
  );
};

export default CartButton;
