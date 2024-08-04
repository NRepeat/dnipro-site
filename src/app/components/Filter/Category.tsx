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

type PropertiesProp = {
  category: { properties: Item[]; name: string; price?: boolean };
};

type FilterCategoryProps = {
  categories: { properties: Item[]; name: string; price?: boolean }[];
};

const FilterCategory: FC<FilterCategoryProps> = ({ categories }) => {
  return (
    <Accordion type="single" collapsible className="w-full pl-1">
      {categories.map((category) => (
        <Properties key={category.name} category={category} />
      ))}
    </Accordion>
  );
};

export default FilterCategory;

export const Properties: FC<PropertiesProp> = ({ category }) => {
  const options = (
    <CheckboxFiltersGroup
      limit={6}
      defaultItems={category.properties}
      items={category.properties}
    />
  );
  return (
    <AccordionItem value={category.name} key={category.name}>
      <AccordionTrigger>{category.name.toUpperCase()}</AccordionTrigger>
      <AccordionContent>
        {category.price ? <PriceRange /> : <div>{options}</div>}
      </AccordionContent>
    </AccordionItem>
  );
};
