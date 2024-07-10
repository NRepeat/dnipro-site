"use client";
import { FilterStateType } from "@/app/store/slice/filterSlice";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Flip } from "gsap/all";
import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";

gsap.registerPlugin(Flip);

const GridWrapper = ({
  children,
  productIds,
}: {
  children: React.ReactNode;
  productIds: string[];
}) => {
  const filter = useSelector(
    (state: { filter: FilterStateType }) => state.filter
  );
  const filterRef = useRef(null);

  useGSAP(() => {
    const state = Flip.getState(filterRef.current);
    console.log("🚀 ~ useGSAP ~ state:", state);
    Flip.from(state, {
      scale: true,
      ease: "power1.inOut",
      duration: 1,
    });
  }, [filter.filterIsOpen]);

  return (
    <div
      ref={filterRef}
      className={`grid  gap-2  ${
        filter.filterIsOpen
          ? "bg-white  grid-cols-3 w-[900px]"
          : "bg-black  grid-cols-4 w-[1300px]"
      }`}
    >
      {children}
    </div>
  );
};

export default GridWrapper;
