"use client";
import PriceRange from "./PriceRange";

import Brand from "./Brand";
import Color from "./Color";
import Material from "./Material";
import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FilterStateType,
  setIsFilterChanged,
} from "@/app/store/slice/filterSlice";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "@nextui-org/react";

type FilterProps = {
  children: React.ReactNode;
};
const Filter: FC<FilterProps> = ({ children }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const filter = useSelector(
    (state: { filter: FilterStateType }) => state.filter
  );

  const handleFilterFormSubmit = () => {
    const params = new URLSearchParams(searchParams);
    const data = Object.keys(filter).map((key) => {
      if (Array.isArray(filter[key])) {
        params.set(`${[key]}`, filter[key].join("-"));
      } else {
        params.set(`${[key]}`, filter[key]);
      }
      dispatch(setIsFilterChanged(false));
    });

    router.replace(`${pathname}?${params.toString()}`);
  };
  return (
    <div className="flex gap-3 ">
      <div className="flex flex-col gap-4 ">
        {filter.isChanged && (
          <Button onClick={handleFilterFormSubmit}>Apply filter</Button>
        )}

        <PriceRange />
        {/* <Size sex={sex} /> */}
        <Brand />
        <Color />
        <Material />
      </div>
      {children}
    </div>
  );
};

export default Filter;
