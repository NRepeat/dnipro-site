"use client";
import { ProductStateType, setFavorite } from "@/app/store/slice/productSlice";
import { Button } from "@nextui-org/react";
import React from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const FavButtons = () => {
  const dispatch = useDispatch();
  const product = useSelector(
    (state: { product: ProductStateType }) => state.product
  );

  const handleSetFavoriteProduct = () => {
    dispatch(setFavorite(!product.favorite));
  };
  return (
    <Button isIconOnly variant="light" onClick={handleSetFavoriteProduct}>
      {product.favorite ? (
        <MdFavorite className="w-4 h-4" />
      ) : (
        <MdFavoriteBorder className="w-4 h-4" />
      )}
    </Button>
  );
};

export default FavButtons;
