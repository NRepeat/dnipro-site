"use client";
import { FilterStateType } from "@/app/store/slice/filterSlice";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Flip } from "gsap/all";
import React, { useRef, useEffect, useState, useLayoutEffect } from "react";
import { useSelector } from "react-redux";

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
  const state = React.useRef<any>();
  React.useLayoutEffect(() => {
    if (state.current) {
      Flip.from(state.current, {
        duration: 1,
        absolute: true,
        ease: "power2.inOut",
      });
    }
  }, [filter.filterIsOpen]);
  useEffect(() => {
    if (filter.filterIsOpen) {
      state.current = Flip.getState(".container");
    } else {
      // state.current = Flip.getState(".container");
    }
  }, [filter.filterIsOpen]);

  return (
    <div className={`grid ${filter.filterIsOpen ? "grid-1" : "grid-2"}`}>
      {children}
    </div>
  );
};

export default GridWrapper;
