"use client";
import {
  FilterStateType,
  setFilterIsOpen,
} from "@/app/store/slice/filterSlice";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Flip } from "gsap/all";
import React, { useRef, useEffect, useState, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

gsap.registerPlugin(Flip);

const GridWrapper = ({
  children,
  productIds,
}: {
  children: React.ReactNode;
  productIds: string[];
}) => {
  const [gridState, setGridState] = React.useState(true);
  const d = productIds.map((id) => `.${id}`);
  const filter = useSelector(
    (state: { filter: FilterStateType }) => state.filter
  );
  const dispatch = useDispatch();
  const state = React.useRef<any>();
  state.current = filter.flipRef;
  React.useLayoutEffect(() => {
    if (state.current) {
      Flip.from(state.current, {
        stagger: {
          each: 0.5,
          grid: "auto",
          from: "start",
          amount: 1.5,
          axis: "y",
          ease: "sine.in",
        },
        ease: "sine.out",
      });
    }
  }, [filter.filterIsOpen]);

  return (
    <div
      className={`grid ${filter.filterIsOpen ? "grid-cols-3" : "grid-cols-4"}`}
    >
      {children}
    </div>
  );
};

export default GridWrapper;
