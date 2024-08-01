import React, { FC } from "react";
import PriceRange from "./PriceRange";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";

type CategoryProps = {
  category: { properties: string[]; name: string; price?: boolean }[];
};

const Category: FC<CategoryProps> = ({ category }) => {
  const Properties = category.map((category) => {
    const options = category.properties.map((property) => (
      <div key={property} className="flex gap-2 items-center">
        <Checkbox id={property} />
        <p className="text-lg">{property}</p>
      </div>
    ));
    return (
      <AccordionItem value={category.name} key={category.name}>
        <AccordionTrigger>{category.name.toUpperCase()}</AccordionTrigger>
        <AccordionContent>
          {category.price ? <PriceRange /> : <div>{options}</div>}
        </AccordionContent>
      </AccordionItem>
    );
  });

  return (
    <Accordion type="single" collapsible className="w-full pl-1">
      {Properties}
    </Accordion>
  );
};

export default Category;
