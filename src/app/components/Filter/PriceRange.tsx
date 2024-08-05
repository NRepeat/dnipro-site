"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { PriseRangeState, setPrice } from "../../store/slice/filterSlice";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";

const PriceRange = () => {
  const filter = useSelector(
    (state: { filter: { price: PriseRangeState } }) => state.filter
  );
  const dispatch = useDispatch();
  const handleInput = (name: keyof PriseRangeState, value: number) => {
    dispatch(setPrice({ [name]: value }));
  };

  return (
    <div className="flex flex-col gap-2  items-center  ">
      <div className="flex gap-2 w-full ">
        <Input
          type="number"
          color="default"
          className="text-black text-bold"
          min={0}
          placeholder="0"
          value={String(filter.price.priceFrom)}
          max={10000}
          onChange={(e) => handleInput("priceFrom", Number(e.target.value))}
        />
        <Input
          type="number"
          color="default"
          className="text-black text-bold"
          min={0}
          placeholder="0"
          value={String(filter.price.priceTo)}
          max={10000}
          onChange={(e) => handleInput("priceTo", Number(e.target.value))}
        />
      </div>
      <Slider
        max={10000}
        min={0}
        step={10}
        value={[filter.price.priceFrom, filter.price.priceTo]}
        onValueChange={([priceFrom, priceTo]) =>
          dispatch(setPrice({ priceFrom, priceTo }))
        }
      />
    </div>
  );
};

export default PriceRange;
