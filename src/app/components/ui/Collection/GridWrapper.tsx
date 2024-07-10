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
        duration: 1,

        ease: "power2.inOut",
      });
    }
  }, [filter.filterIsOpen]);
  // const handleShowFilter = () => {
  //   state.current = Flip.getState(".container");
  //   dispatch(setFilterIsOpen(!filter.filterIsOpen));
  // };
  return (
    <div className={`grid ${filter.filterIsOpen ? "grid-1" : "grid-2"}`}>
      {/* <button onClick={handleShowFilter}>toggle</button> */}
      {children}
    </div>
  );
};

export default GridWrapper;
