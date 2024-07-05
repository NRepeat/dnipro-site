import { Slider } from "@nextui-org/react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter, setPrice } from "../../store/slice/filterSlice";
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
    <div className="flex flex-col gap-2 w-full  items-start justify-center">
      <Slider
        label="Ціна"
        formatOptions={{ style: "currency", currency: "UAH" }}
        step={10}
        maxValue={1000}
        minValue={100}
        value={filter.price}
        onChange={handleSetValue}
        onMouseDownCapture={() => console.log("asdas")}
        className="max-w-md"
      />
      <input
        type="number"
        value={filter.price[0]}
        max={1000}
        onChange={(e) => handleInput(e, true)}
      />
      <input
        type="text"
        value={filter.price[1]}
        onChange={(e) => handleInput(e, false)}
      />
    </div>
  );
};

export default PriceRange;
