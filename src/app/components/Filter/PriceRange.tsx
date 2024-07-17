"use client";

import { Input, Slider } from "@nextui-org/react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPrice } from "../../store/slice/filterSlice";
const PriceRange = () => {
  const filter = useSelector(
    (state: { filter: { price: [number, number] } }) => state.filter
  );
  const dispatch = useDispatch();

  const handleSetValue = (data: number | number[]) => {
    if (Array.isArray(data)) {
      dispatch(setPrice(data));
    }
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
    <div className="flex flex-col gap-2  items-center w-full overflow-hidden px-2 py-2">
      <div className="flex gap-2">
        <Input
          type="number"
          color="default"
          className="text-black text-bold  "
          variant="underlined"
          value={`${filter.price[0]}`}
          max={1000}
          onChange={(e) => handleInput(e, true)}
        />
        <Input
          type="number"
          color="default"
          className="text-black text-bold  "
          variant="underlined"
          value={`${filter.price[1]}`}
          max={1000}
          onChange={(e) => handleInput(e, true)}
        />
      </div>
      <Slider
        label=""
        formatOptions={{ style: "currency", currency: "UAH" }}
        step={10}
        maxValue={1000}
        minValue={100}
        color="primary"
        value={filter.price}
        size="sm"
        onChange={handleSetValue}
      />
    </div>
  );
};

export default PriceRange;
