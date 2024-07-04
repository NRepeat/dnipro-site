import { Checkbox, CheckboxGroup } from "@nextui-org/react";
import React from "react";
import { CustomCheckbox } from "../ui/CustomCheckbox/CustomCheckbox";

const data = [{ brand: "1" }, { brand: "2" }, { brand: "3" }, { brand: "4" }];
const Brand = () => {
  const [groupSelected, setGroupSelected] = React.useState([]);
  return (
    <div className="flex flex-col gap-2">
      <CheckboxGroup
        className="gap-1"
        label="Select amenities"
        orientation="horizontal"
        value={groupSelected}
        onChange={setGroupSelected}
      >
        {data.map((data) => (
          <CustomCheckbox value={data.brand} key={data.brand}>
            {data.brand}
          </CustomCheckbox>
        ))}
      </CheckboxGroup>
    </div>
  );
};

export default Brand;
