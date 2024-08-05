import React, { FC } from "react";
import PriceRange from "./PriceRange";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CheckboxFiltersGroup,
  Item,
} from "../ui/CustomCheckboxGroup/CustomCheckboxGroup";
import { useSet } from "react-use";
import { Actions } from "react-use/lib/useSet";

type PropertiesCategory = {
  properties: Item[];
  name: string;
  price?: boolean;
  filterSet: [Set<string>, Actions<string>];
};
type PropertiesProp = {
  category: PropertiesCategory;
  filterSet: [Set<string>, Actions<string>];
};

type FilterCategoryProps = {
  categories: PropertiesCategory[];
};

const FilterCategory: FC<FilterCategoryProps> = ({ categories }) => {
  return (
    <Accordion type="single" collapsible className="w-full pl-1">
      {categories.map((category) => (
        <Properties
          filterSet={category.filterSet}
          key={category.name}
          category={category}
        />
      ))}
    </Accordion>
  );
};

export default FilterCategory;

export const Properties: FC<PropertiesProp> = ({ category, filterSet }) => {
  const options = (
    <CheckboxFiltersGroup
      filterSet={filterSet}
      limit={6}
      defaultItems={category.properties}
      items={category.properties}
    />
  );
  return (
    <AccordionItem value={category.name} key={category.name}>
      <AccordionTrigger>{category.name.toUpperCase()}</AccordionTrigger>
      <AccordionContent>{<div>{options}</div>}</AccordionContent>
    </AccordionItem>
  );
};
