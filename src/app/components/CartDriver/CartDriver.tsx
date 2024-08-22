"use client";
import React, { FC, useEffect } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CartItem from "../CartItem/CartItem";
import CartDriverItem from "./CartDriverItem";
import { useAppDispatch } from "@/app/store/store";
import { CartStateType } from "@/app/store/slice/cartSlice";
import { useSelector } from "react-redux";
import cartThunk from "@/app/store/thunk/cartThunk";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const CartDriver: FC<Props> = ({ children, className }) => {
  const cartState = useSelector((state: { cart: CartStateType }) => state.cart);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(cartThunk.thunk.fetchCart());
  }, [dispatch]);

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="flex pb-0 bg-gray-200 flex-col justify-between">
        <SheetTitle>
          <span>In cart</span>
          <span className="font-bold">{cartState.items.length} items</span>
        </SheetTitle>
        <div className="-mx-6 mt-5 overflow-auto scrollbar flex-1 gap-2 flex flex-col">
          <CartDriverItem items={cartState.items} />
        </div>
        <SheetFooter className="-mx-6 bg-white p-8">
          <div className="w-full flex">
            <div className="flex mb-4">Total</div>
            <span>{cartState.totalAmount}$</span>
          </div>
          <Link href={"/bag"}>
            <Button className="w-full h-12 text-base">Make order </Button>
          </Link>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default CartDriver;
