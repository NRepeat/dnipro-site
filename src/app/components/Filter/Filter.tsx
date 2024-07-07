"use client";
import PriceRange from "./PriceRange";

import Brand from "./Brand";
import Color from "./Color";
import Material from "./Material";
import React, { FC, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FilterStateType,
  setIsFilterChanged,
} from "@/app/store/slice/filterSlice";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "@nextui-org/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

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
  const filterRef = useRef(null);
  useGSAP(() => {
    if (filter.filterShouldStick) {
      gsap.to(filterRef.current, { top: 0, duration: 0.2 });
    } else {
      gsap.to(filterRef.current, { top: 60, duration: 0.2 });
    }
  }, [filter.filterShouldStick]);
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
    <div className="flex gap-3 flex-col w-full ">
      <div
        className={`flex justify-between px-4  items-center sticky  ${
          filter.filterShouldStick ? "top-0" : "top-[60px]"
        } left-0 bg-blue-100 z-30 backdrop-blur-sm h-[50px] w-full`}
        ref={filterRef}
      >
        <p>Show filters</p>
        <div className="flex">
          <p>Order by: recommendation</p>
          <p>Grid layout</p>
        </div>
      </div>
      {filter.filterIsOpen && (
        <div className="flex flex-col gap-4">
          {filter.isChanged && (
            <Button onClick={handleFilterFormSubmit}>Apply filter</Button>
          )}
          <PriceRange />
          {/* <Size sex={sex} /> */}
          <Brand />
          <Color />
          <Material />
        </div>
      )}
      {children}
    </div>
  );
};

export default Filter;
