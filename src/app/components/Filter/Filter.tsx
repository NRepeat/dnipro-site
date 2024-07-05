import { handleFormAction } from "@/app/data/collection";
import PriceRange from "./PriceRange";
import { Size } from "./Size";
import Brand from "./Brand";
import Color from "./Color";
import Material from "./Material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FilterStateType } from "@/app/store/slice/filterSlice";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

const Filter = ({
  pathname,
  sex,
}: {
  pathname: string;
  sex: string | string[];
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const filter = useSelector(
    (state: { filter: FilterStateType }) => state.filter
  );
  console.log("🚀 ~ filter:", filter);
  const { price } = filter;
  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    params.set("price", price.join(","));
    router.push(
      {
        pathname: router.pathname,
        query: params.toString(),
      },
      undefined,
      { shallow: true }
    );
  }, [filter, searchParams, price, router]);

  return (
    <div className="flex flex-col gap-4">
      <PriceRange />
      <Size sex={sex} />
      <Brand />
      <Color />
      <Material />
    </div>
  );
};

export default Filter;
