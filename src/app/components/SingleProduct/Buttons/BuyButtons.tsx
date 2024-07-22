"use client";
import { ProductStateType } from "@/app/store/slice/productSlice";
import { Button } from "@nextui-org/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const BuyButtons = () => {
  const dispatch = useDispatch();
  const product = useSelector(
    (state: { product: ProductStateType }) => state.product
  );
  const [error, setError] = useState<boolean>(false);
  const handleBuyButtonHover = () => {
    if (!product.size) {
      setError(true);
    } else {
      setError(false);
    }
  };
  return (
    <>
      {error ? (
        <p className="text-red-600 h-8">Pleas chose size</p>
      ) : (
        <div className="h-8"></div>
      )}
      <div className="flex gap-2 wrap flex-col w-full">
        <Button className="w-full" onMouseOver={handleBuyButtonHover}>
          Add to shopping
        </Button>
        <Button
          color="primary"
          className="w-full"
          onMouseOver={handleBuyButtonHover}
        >
          Buy right now
        </Button>
        <p>
          <span>Product Code:</span> 4SGPP13IT00RJ1UBRY
        </p>
      </div>
    </>
  );
};

export default BuyButtons;
