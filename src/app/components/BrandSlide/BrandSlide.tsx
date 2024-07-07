import React from "react";
import CardGrid from "../ui/CardGrid/CardGrid";
import image from "@/app/utils/assets/images";
import CustomCard from "../ui/Card/Card";

const BrandSlide = () => {
  const brandCards = Object.keys(image.brandsIcons).map((key, i) => (
    <CustomCard image={image.brandsIcons[key]} id={key} key={key} />
  ));
  return (
    <div className="embla__slide h-full">
      <div className=" h-full">
        <div className="w-full  ">
          <CardGrid cards={brandCards} columns={3} rows={3} />
        </div>
      </div>
    </div>
  );
};

export default BrandSlide;
