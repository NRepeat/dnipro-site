import { CheckboxGroup } from "@nextui-org/react";
import React from "react";
import { CustomCheckbox } from "../ui/CustomCheckbox/CustomCheckbox";

const data = [{ color: "green" }];

const Color = () => {
  const [groupSelected, setGroupSelected] = React.useState([]);
  return (
    <div className="flex flex-col gap-1 w-full">
      <CheckboxGroup
        className="gap-1"
        label="Select amenities"
        orientation="horizontal"
        value={groupSelected}
        onChange={() => setGroupSelected}
      >
        {data.map((data) => (
          <CustomCheckbox value={data.color} key={data.color}>
            {data.color}
          </CustomCheckbox>
        ))}
      </CheckboxGroup>
    </div>
  );
};

export default Color;
