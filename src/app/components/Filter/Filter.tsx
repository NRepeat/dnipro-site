"use client";
import PriceRange from "./PriceRange";
import Brand from "./Brand";
import Color from "./Color";
import Material from "./Material";
import React, { FC, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FilterStateType,
  setFilterIsOpen,
  setFlipState,
} from "@/app/store/slice/filterSlice";

import gsap from "gsap";
import { Flip } from "gsap/all";
import Category from "./Category";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type FilterProps = {
  children: React.ReactNode;
};

const Filter: FC<FilterProps> = ({ children }) => {
  const dispatch = useDispatch();
  const filter = useSelector(
    (state: { filter: FilterStateType }) => state.filter
  );
  const filterRef = useRef<HTMLDivElement>(null);
  const filterBodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (filter.filterShouldStick) {
      gsap.to(filterRef.current, {
        top: 0,
        duration: 0.4,
        delay: 0.2,
        ease: "power1.out",
      });
      gsap.to(filterBodyRef.current, {
        top: 60,
        duration: 0.2,
        delay: 0.2,
        ease: "power1.out",
      });
    } else {
      gsap.to(filterRef.current, {
        top: 60,
        duration: 0.3,
        delay: 0.3,
        ease: "power1.out",
      });
      gsap.to(filterBodyRef.current, {
        top: 120,
        duration: 0.4,
        delay: 0.3,
        ease: "power1.out",
      });
    }
  }, [filter.filterShouldStick]);

  useEffect(() => {
    if (filter.filterIsOpen) {
      gsap.fromTo(
        "#filter-body",
        { autoAlpha: 0, x: -300 },
        { autoAlpha: 1, x: 0, duration: 0.5, display: "block" }
      );
    } else {
      gsap.fromTo(
        "#filter-body",
        { autoAlpha: 1, x: 0, display: "block" },
        {
          autoAlpha: 1,
          x: -300,
          duration: 0.5,
        }
      );
    }
  }, [filter.filterIsOpen]);

  const handleShowFilter = () => {
    const data = Flip.getState(".container");
    dispatch(setFlipState(data));
    dispatch(setFilterIsOpen(!filter.filterIsOpen));
  };

  const handleFilterFormSubmit = () => {
    // Add filter form submit logic here
  };

  return (
    <div className="flex  flex-col w-full ">
      <div
        className={`flex justify-between   items-center sticky ${
          filter.filterShouldStick ? "top-0 shadow-lg" : "top-[60px] border-t-2"
        } left-0 z-30 backdrop-blur-md h-[50px] w-full `}
        ref={filterRef}
      >
        <Button variant={"outline"} onClick={handleShowFilter}>
          <p>{!filter.filterIsOpen ? "Show filters" : "Close filters"}</p>
        </Button>
        <Select>
          <SelectTrigger className="w-[180px] flex ">
            <div className="flex gap-2">
              Order by:
              <SelectValue placeholder="Rating" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="rating">Rating</SelectItem>
              <SelectItem value="cost">Cost</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className={`flex w-full  transition-all`}>
        <div
          className={`sticky ${
            filter.filterIsOpen ? "top-[120px] " : "top-[50px]  opacity-0 "
          } z-auto left-0 h-[350px] transition-opacity `}
          ref={filterBodyRef}
        >
          <div
            className={`flex flex-col gap-4 min-h-full invisible   ${
              filter.filterIsOpen ? "w-[350px]" : "absolute w-[240px] "
            } pr-4`}
            id="filter-body"
          >
            {filter.isChanged && (
              <Button onClick={handleFilterFormSubmit}>Apply filter</Button>
            )}
            <Category
              category={[
                { name: "Lorem", properties: ["lorem", "lorem"] },
                { name: "Price", properties: [""], price: true },
              ]}
            />
            {/* <PriceRange />
            <Brand />
            <Color />
            <Material /> */}
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Filter;
