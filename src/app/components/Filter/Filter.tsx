"use client";
import PriceRange from "./PriceRange";

import Brand from "./Brand";
import Color from "./Color";
import Material from "./Material";
import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FilterStateType } from "@/app/store/slice/filterSlice";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { filterProducts } from "@/app/data/collection";

type FilterProps = {
  children: React.ReactNode;
};
const Filter: FC<FilterProps> = ({ children }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const filter = useSelector(
    (state: { filter: FilterStateType }) => state.filter
  );
  const { price } = filter;

  const handleFilterFormSubmit = () => {
    const params = new URLSearchParams(searchParams);
    params.set("min", price[0].toString());
    params.set("max", price[1].toString());
    router.replace(`${pathname}?${params.toString()}`);
  };
  return (
    <>
      <form action={() => handleFilterFormSubmit()}>
        <button>submit</button>
      </form>
      <div className="flex flex-col gap-4">
        <PriceRange />
        {/* <Size sex={sex} /> */}
        <Brand />
        <Color />
        <Material />
      </div>
      {children}
    </>
  );
};

export default Filter;
