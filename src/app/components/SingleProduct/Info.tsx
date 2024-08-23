"use client";
import React, { useState } from "react";
import { CiShare2 } from "react-icons/ci";
import FavButtons from "./Buttons/FavButtons";
import ColorPicker, { ImageVariant } from "./ColorPicker";
import SizePicker from "./SizePicker";
import BuyButtons from "./Buttons/BuyButtons";
import ShippingInfo from "./Shipping";
import { useAppDispatch } from "@/app/store/store";
import cartThunk from "@/app/store/thunk/cartThunk";
import { Button } from "@/components/ui/button";
import { Divider } from "@nextui-org/react";
import { FullProductItem } from "@/app/types/types";
import Link from "next/link";
import { CartStateType } from "@/app/store/slice/cartSlice";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const Info = ({
  item,
  variantId,
}: {
  item: FullProductItem;
  variantId: number;
}) => {
  const dispatch = useAppDispatch();
  const cartState = useSelector((state: { cart: CartStateType }) => state.cart);
  console.log("🚀 ~ cartState:", cartState);

  const onAddProduct = (id: number) => {
    dispatch(cartThunk.thunk.createCartItem({ productItemId: id, quantity: 1 }))
      .catch(() => toast.success("Виникла помилка при додавання товару"))
      .finally(() => toast.success("Товар додан до корзини"));
  };

  return (
    <section className=" flex-col max-w-[450px] w-full flex justify-center">
      <div className="inline-flex justify-between items-center min-w-[300px]">
        <p className="capitalize text-sm font-light py-4">
          {item.product.manufacturer.slug}
        </p>
        <div className="flex">
          <Button variant={"outline"}>
            <CiShare2 className="w-4 h-4" />
          </Button>
          <FavButtons />
        </div>
      </div>
      <div className="flex pb-8 pt-1 gap-4 flex-wrap">
        <p className="w-full font-semibold">{item.name}</p>
        <p className="pr-4">
          {item.price}
          <span>$</span>
        </p>
      </div>
      <div>
        <div className="pb-8">
          <>
            <Divider />
            <ColorPicker
              variants={item.product.variants}
              variantId={variantId}
            />
            <Divider />
            <SizePicker sizes={[20, 30, 40]} productId={item.id} />
            <Link
              href={`/buy/product/${item.product.id}/item/${item.id}`}
              className="w-[150px]"
            >
              Buy it now
            </Link>
            <Button
              className="w-[150px]"
              variant={"outline"}
              loading={cartState.cartItemsLoading && cartState.loading}
              onClick={() => onAddProduct(item.id)}
            >
              Add to cart
            </Button>
          </>
        </div>
        <Divider />
        <div>
          <p className="flex flex-col py-4">
            <span className="pb-1.5">DETAILS</span> Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Sunt optio excepturi aperiam itaque
            odit quod qui vero quos rem similique ipsum alias, fuga commodi
            voluptatibus nihil officia eligendi! Sed, unde.
          </p>
          <ul>
            <li>Composition 61% Viscose 39% Linen</li>
            <li>Double pleats </li>
            <li>Elasticated waistband with belt loops </li>
            <li>Two side welt pockets </li>
          </ul>
        </div>
      </div>

      <ShippingInfo />
    </section>
  );
};

export default Info;
