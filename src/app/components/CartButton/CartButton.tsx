import Link from "next/link";
import React from "react";
import { IoBag } from "react-icons/io5";

const CartButton = () => {
  return (
    <Link
      href={"/bag/preview"}
      className="flex justify-center items-center"
      prefetch
    >
      <IoBag className="w-5 h-5" />
    </Link>
  );
};

export default CartButton;
