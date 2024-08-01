"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPrice } from "../../store/slice/filterSlice";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
const PriceRange = () => {
  const filter = useSelector(
    (state: { filter: { price: [number, number] } }) => state.filter
  );
  const dispatch = useDispatch();

  const handleSetValue = (e: React.FormEvent<HTMLDivElement>) => {
    console.log("🚀 ~ handleSetValue ~ e:", e);
    // if (Array.isArray(data)) {
    //   dispatch(setPrice(data));
    // }
  };
  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    start: boolean
  ) => {
    const newRangeValue = e.target.value ? parseInt(e.target.value) : 100;
    if (start) {
      dispatch(setPrice([newRangeValue, filter.price[1]]));
    } else {
      dispatch(setPrice([filter.price[0], newRangeValue]));
    }
  };

  return (
    <div className="flex flex-col gap-2  items-center  ">
      <div className="flex gap-2 w-full ">
        <Input
          type="number"
          color="default"
          className="text-black text-bold  "
          value={`${filter.price[0]}`}
          max={1000}
          onChange={(e) => handleInput(e, true)}
        />
        <Input
          type="number"
          color="default"
          className="text-black text-bold  "
          value={`${filter.price[1]}`}
          max={1000}
          onChange={(e) => handleInput(e, true)}
        />
      </div>
      <Slider
        defaultValue={[33]}
        max={100}
        step={1}
        // value={filter.price}
        // onChange={(e) => handleSetValue(e)}
      />
    </div>
  );
};

export default PriceRange;
