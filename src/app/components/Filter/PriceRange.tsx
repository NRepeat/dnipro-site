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
    <div className="flex flex-col gap-2  items-center max-w-52">
      <Slider
        label="Ціна"
        formatOptions={{ style: "currency", currency: "UAH" }}
        step={10}
        maxValue={1000}
        minValue={100}
        color="foreground"
        value={filter.price}
        onChange={handleSetValue}
        onMouseDownCapture={() => console.log("asdas")}
        className="max-w-md"
      />
      <div className="flex">
        <Input
          type="number"
          value={`${filter.price[0]}`}
          max={1000}
          onChange={(e) => handleInput(e, true)}
        />
        <Input
          type="text"
          value={`${filter.price[1]}`}
          onChange={(e) => handleInput(e, false)}
        />
      </div>
    </div>
  );
};

export default PriceRange;
