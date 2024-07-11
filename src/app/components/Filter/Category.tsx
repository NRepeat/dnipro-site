import { Accordion, AccordionItem } from "@nextui-org/react";
import React, { FC } from "react";

type CategoryProps = {
  category: { properties: string[]; name: string }[];
};

const Category: FC<CategoryProps> = ({ category }) => {
  const Properties = category[0].properties.map((property) => (
    <AccordionItem key={property} title={property}>
      {property}
    </AccordionItem>
  ));

  return <Accordion>{Properties}</Accordion>;
};

export default Category;
