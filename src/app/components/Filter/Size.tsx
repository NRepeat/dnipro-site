import { CheckboxGroup } from "@nextui-org/react";
import React from "react";
import { CustomCheckbox } from "../ui/CustomCheckbox/CustomCheckbox";

const womanSizes = [28, 29, 30, 31, 32];
const manSizes = [38, 39, 40, 41, 42];

export const Size = ({ sex }: { sex: string | string[] }) => {
  const [groupSelected, setGroupSelected] = React.useState([]);

  const manSizeMap = manSizes.map((size) => (
    <CustomCheckbox value={size} key={size}>
      {size}
    </CustomCheckbox>
  ));
  const womanSizeMap = womanSizes.map((size) => (
    <CustomCheckbox value={size} key={size}>
      {size}
    </CustomCheckbox>
  ));
  return (
    <div className="flex flex-col gap-1 w-full">
      <CheckboxGroup
        className="gap-1"
        label="Select amenities"
        orientation="horizontal"
        value={groupSelected}
        onChange={() => setGroupSelected}
      >
        {sex === "man" ? manSizeMap : womanSizeMap}
      </CheckboxGroup>
    </div>
  );
};
