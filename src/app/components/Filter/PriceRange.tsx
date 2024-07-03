import { Slider } from "@nextui-org/react";
import React from "react";

const PriceRange = () => {
  const [value, setValue] = React.useState<number[]>([100, 300]);
  const handleSetValue = (data: number | number[]) => {
    if (Array.isArray(data)) {
      setValue(data);
    }
  };
  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    start: boolean
  ) => {
    const newRangeValue = e.target.value ? parseInt(e.target.value) : 100;
    if (start) {
      setValue((prev) => [newRangeValue, prev[1]]);
    } else {
      setValue((prev) => [prev[0], newRangeValue]);
    }
  };
  return (
    <div className="flex flex-col gap-2 w-full h-full max-w-md items-start justify-center">
      <Slider
        label="Ціна"
        formatOptions={{ style: "currency", currency: "UAH" }}
        step={10}
        maxValue={1000}
        minValue={100}
        value={value}
        onChange={handleSetValue}
        className="max-w-md"
      />
      <input
        type="text"
        value={value[0]}
        onChange={(e) => handleInput(e, true)}
      />
      <input
        type="text"
        value={value[1]}
        onChange={(e) => handleInput(e, false)}
      />
    </div>
  );
};

export default PriceRange;
