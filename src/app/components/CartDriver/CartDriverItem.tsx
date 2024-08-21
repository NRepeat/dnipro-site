"use client";
import {
  CartStateItem,
  CartStateType,
  fetchCart,
} from "@/app/store/slice/cartSlice";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import CartItem from "../CartItem/CartItem";
import { useAppDispatch } from "@/app/store/store";

const CartDriverItem = ({ items }: { items: CartStateItem[] }) => {
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
        />
      ))}
    </>
  );
};

export default CartDriverItem;
