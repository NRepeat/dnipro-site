"use client";
import PriceRange from "./PriceRange";

import Brand from "./Brand";
import Color from "./Color";
import Material from "./Material";
import React, { FC, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FilterStateType,
  setFilterIsOpen,
  setFlipState,
} from "@/app/store/slice/filterSlice";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "@nextui-org/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Flip } from "gsap/all";

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
      gsap.to("#filter-body", { top: 60, duration: 0.2 });
    } else {
      gsap.to(filterRef.current, { top: 60, duration: 0.2 });
      gsap.to("#filter-body", { top: 120, duration: 0.2 });
    }
  }, [filter.filterShouldStick]);
  const handleShowFilter = () => {
    dispatch(setFlipState(Flip.getState(".container")));
    dispatch(setFilterIsOpen(!filter.filterIsOpen));
  };
  const handleFilterFormSubmit = () => {
    // const params = new URLSearchParams(searchParams);
    // const data = Object.keys(filter).map((key) => {
    //   if (Array.isArray(filter[key])) {
    //     params.set(`${[key]}`, filter[key].join("-"));
    //   } else {
    //     params.set(`${[key]}`, filter[key]);
    //   }
    //   dispatch(setIsFilterChanged(false));
    // });
    // router.replace(`${pathname}?${params.toString()}`);
  };
  return (
    <div className="flex gap-3 flex-col w-full ">
      <div
        className={`flex justify-between px-4  items-center sticky  ${
          filter.filterShouldStick ? "top-0" : "top-[60px]"
        } left-0 bg-blue-100 z-30 backdrop-blur-sm h-[50px] w-full`}
        ref={filterRef}
      >
        <Button onClick={handleShowFilter}>
          <p>Show filters</p>
        </Button>
        <div className="flex">
          <p>Order by: recommendation</p>
          <p>Grid layout</p>
        </div>
      </div>

      <div className="flex  w-full ">
        {filter.filterIsOpen && (
          <div
            className={` sticky ${
              filter.filterIsOpen ? "top-[120px]" : "top-[50px] "
            }  z-auto left-0 h-[350px]`}
            id="filter-body"
          >
            <div className="flex flex-col gap-4 min-h-full">
              {filter.isChanged && (
                <Button onClick={handleFilterFormSubmit}>Apply filter</Button>
              )}
              <PriceRange />
              <Brand />
              <Color />
              <Material />
            </div>
          </div>
        )}
        <div className="w-full flex justify-center items-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Filter;
