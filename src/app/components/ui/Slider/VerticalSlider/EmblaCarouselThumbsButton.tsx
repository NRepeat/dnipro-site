import { Image } from "@nextui-org/react";
import React from "react";
import "@/app/styles/verticalSlider.css";

type PropType = {
  selected: boolean;
  index: number;
  onClick: () => void;
  image: any;
};

export const Thumb: React.FC<PropType> = (props) => {
  const { selected, index, onClick, image } = props;

  return (
    <div
      className={"embla-thumbs__slide".concat(
        selected ? " embla-thumbs__slide--selected" : ""
      )}
    >
      <div onClick={onClick} className="w-[150px] flex ">
        {image}
      </div>
    </div>
  );
};
