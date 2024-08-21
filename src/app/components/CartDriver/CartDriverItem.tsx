"use client";
import { CartStateItem, CartStateType } from "@/app/store/slice/cartSlice";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import CartItem from "../CartItem/CartItem";
import { useAppDispatch } from "@/app/store/store";
import cartThunk from "@/app/store/thunk/cartThunk";

const CartDriverItem = ({ items }: { items: CartStateItem[] }) => {
  const dispatch = useAppDispatch();
  const onClickCountButton = (
    id: number,
    quantity: number,
    type: "plus" | "minus"
  ) => {
    const newQuantity = type === "plus" ? quantity + 1 : quantity - 1;
    dispatch(cartThunk.thunk.updateCartQuantity({ id, quantity: newQuantity }));
  };
  const onClickDeleteButton = (id: number) => {
    dispatch(cartThunk.thunk.deleteCart({ id }));
  };
  return (
    <>
      {items.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          imageUrl={item.imageUrl[0]}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          details={{
            color: "blue",
            name: "Test",
            size: "12",
          }}
          onClickCountButton={onClickCountButton}
          onClickDeleteButton={onClickDeleteButton}
        />
      ))}
    </>
  );
};

export default CartDriverItem;
