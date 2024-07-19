import { CheckboxGroup } from "@nextui-org/react";
import React from "react";
import { CustomCheckbox } from "../ui/CustomCheckbox/CustomCheckbox";

const data = [{ material: "plastic" }, { material: "iron" }];

const filter = (formData: FormData) => {
  console.log("🚀 ~ formData:", formData.get("material"));
};

const Material = () => {
  const [groupSelected, setGroupSelected] = React.useState([]);

  return (
    <div className="flex flex-col gap-1 w-full">
      <form action={(formData) => filter(formData)}>
        <CheckboxGroup
          className="gap-1"
          label="Select amenities"
          orientation="horizontal"
          value={groupSelected}
          onChange={() => setGroupSelected}
        >
          {data.map((data) => (
            <CustomCheckbox value={data.material} key={data.material}>
              {data.material}
            </CustomCheckbox>
          ))}
        </CheckboxGroup>
        <input name="material" id="" type="hidden" value={groupSelected} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Material;
