"use client";
import {
  BagStateType,
  setIsBuyRightNowModalOpen,
  setProductInBag,
} from "@/app/store/slice/bagSlice";
import { ProductStateType } from "@/app/store/slice/productSlice";
import { Button } from "@nextui-org/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const BuyButtons = () => {
  const dispatch = useDispatch();
  const product = useSelector(
    (state: { product: ProductStateType }) => state.product
  );
  const bagState = useSelector((state: { bag: BagStateType }) => state.bag);
  const [error, setError] = useState<boolean>(false);
  const handleBuyButtonHover = () => {
    if (!product.size) {
      setError(true);
    } else {
      setError(false);
    }
  };
  const handleAddToBag = () => {
    const newProducts = bagState.products
      ? [product, ...bagState.products]
      : [product];
    dispatch(setProductInBag(newProducts));
  };
  const handleBuy = () => {
    dispatch(
      setIsBuyRightNowModalOpen({
        isOpen: !bagState.isBuyRightNowModalOpen,
        product: product,
      })
    );
  };
  return (
    <>
      {error ? (
        <p className="text-red-600 h-8">Pleas chose size</p>
      ) : (
        <div className="h-8"></div>
      )}
      <div className="flex gap-2 wrap flex-col w-full">
        <Button
          className="w-full"
          onMouseOver={handleBuyButtonHover}
          onClick={handleAddToBag}
        >
          Add to shopping bag
        </Button>
        <Button
          color="primary"
          className="w-full"
          onMouseOver={handleBuyButtonHover}
          onClick={handleBuy}
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
