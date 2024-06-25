import React from "react";
import { cross, hoodieImage, jacketImage, t_short } from "~/utils";
import { categoriesData } from "~/constant";
import CardC from "./Card";

const Categories = () => {
  return (
    <div className="w-full gap-2 grid grid-cols-12 grid-rows-6">
      {categoriesData &&
        categoriesData.map((category) => (
          <CardC key={category.name} categoriesData={category} />
        ))}
    </div>
  );
};

export default Categories;
