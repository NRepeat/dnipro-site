"use client";
import { ProductStateType, setColor } from "@/app/store/slice/productSlice";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ColorPicker = ({ product }: { product: any }) => {
  const dispatch = useDispatch();
  const productState = useSelector(
    (state: { product: ProductStateType }) => state.product
  );

  const handleSelectColor = (color: string) => {
    dispatch(setColor(color));
  };
  return (
    <div className="py-4 pb-6">
      <p className="text-sm pb-2">CHOOSE COLOR</p>
      <div className="flex gap-1 flex-wrap w-full">
        {product.images.map((image: string) => (
          <Image
            onClick={() => handleSelectColor(image)}
            className={`w-[100px] hover:border-1 border-1 transition-all duration-500 hover:border-sky-400 ${
              productState.color === image && "border-sky-400"
            }`}
            src={image}
            key={image}
            width={300}
            height={300}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
