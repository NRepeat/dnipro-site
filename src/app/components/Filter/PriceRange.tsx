"use client";

import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PriseRangeState, setPrice } from "../../store/slice/filterSlice";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";

type PriceRangeProps = {
  setPrice: React.Dispatch<React.SetStateAction<PriseRangeState>>;
  price: PriseRangeState;
};

const PriceRange: FC<PriceRangeProps> = ({ price, setPrice }) => {

  const handleInput = (name: keyof PriseRangeState, value: number) => {
    setPrice({ [name]: value });
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
          value={String(price.priceFrom)}
          max={100000}
          onChange={(e) => handleInput("priceFrom", Number(e.target.value))}
        />
        <Input
          type="number"
          color="default"
          className="text-black text-bold"
          min={0}
          placeholder="10000"
          value={String(price.priceTo)}
          max={10000}
          onChange={(e) => handleInput("priceTo", Number(e.target.value))}
        />
      </div>
      <Slider
        max={10000}
        min={0}
        step={10}
        value={[price.priceFrom || 0, price.priceTo || 10000]}
        onValueChange={([priceFrom, priceTo]) =>
          setPrice({ priceFrom, priceTo })
        }
      />
    </div>
  );
};

export default PriceRange;
