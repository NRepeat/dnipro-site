import {
  Accordion,
  AccordionItem,
  Checkbox,
  CheckboxGroup,
} from "@nextui-org/react";
import React, { FC } from "react";
import PriceRange from "./PriceRange";

type CategoryProps = {
  category: { properties: string[]; name: string; price?: boolean }[];
};

const Category: FC<CategoryProps> = ({ category }) => {
  const Properties = category.map((category) => {
    const options = category.properties.map((property) => (
      <Checkbox key={property}>{property}</Checkbox>
    ));
    return (
      <AccordionItem
        key={category.name}
        title={category.name}
        className="overflow-hidden"
      >
        {category.price ? (
          <PriceRange />
        ) : (
          <CheckboxGroup>{options}</CheckboxGroup>
        )}
      </AccordionItem>
    );
  });

  return <Accordion>{Properties}</Accordion>;
};

export default Category;
