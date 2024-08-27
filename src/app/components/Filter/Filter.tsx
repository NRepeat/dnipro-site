"use client";

import React, { FC, useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FilterStateType,
  PriseRangeState,
  setFilterIsOpen,
  setFlipState,
} from "@/app/store/slice/filterSlice";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Item } from "../ui/CustomCheckboxGroup/CustomCheckboxGroup";
import FilterCategory from "./Category";
import { Category, Manufacturer } from "@prisma/client";
import { useSet } from "react-use";
import PriceRange from "./PriceRange";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "qs";
import { AllProductSizes } from "@/app/types/types";

export type ManufacturerWithProductCount = Manufacturer & {
  _count: { product: number };
};
export type CategoryWithProductCount = Category & {
  _count: { product: number };
};
type FilterProps = {
  children: React.ReactNode;
  brands: CategoryWithProductCount[];
  manufactures: ManufacturerWithProductCount[];
  sizes: AllProductSizes[];
};

interface QueryFilters extends PriseRangeState {
  brand: string;
  manufacture: string;
  size: string;
}

const Filter: FC<FilterProps> = ({ children, brands, manufactures, sizes }) => {
  const dispatch = useDispatch();
  const params = useSearchParams() as unknown as Map<
    keyof QueryFilters,
    string
  >;
  const router = useRouter();
  const manufactureItemsFilterSet = useSet<string>(
    new Set(
      params.has("manufacture") ? params.get("manufacture")?.split(",") : []
    )
  );
  const sizesItemsFilterSet = useSet<string>(
    new Set(params.has("size") ? params.get("size")?.split(",") : [])
  );
  const brandItemsFilterSet = useSet<string>(
    new Set(params.has("brand") ? params.get("brand")?.split(",") : [])
  );
  const [price, setPrice] = useState<PriseRangeState>({
    priceFrom: Number(params.get("priceFrom")) || undefined,
    priceTo: Number(params.get("priceTo")) || undefined,
  });
  const [brandSetItemsValues] = brandItemsFilterSet;
  const [sizeSetItemsValues] = sizesItemsFilterSet;
  const [manufactureSetItemsValues] = manufactureItemsFilterSet;
  const filter = useSelector(
    (state: { filter: FilterStateType }) => state.filter
  );
  const filterRef = useRef<HTMLDivElement>(null);
  const filterBodyRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (filter.filterShouldStick) {
      gsap.to(filterRef.current, {
        top: 0,
        duration: 0.4,
        delay: 0.2,
        ease: "power1.out",
      });
      gsap.to(filterBodyRef.current, {
        top: 60,
        duration: 0.2,
        delay: 0.2,
        ease: "power1.out",
      });
    } else {
      gsap.to(filterRef.current, {
        top: 60,
        duration: 0.3,
        delay: 0.3,
        ease: "power1.out",
      });
      gsap.to(filterBodyRef.current, {
        top: 120,
        duration: 0.4,
        delay: 0.3,
        ease: "power1.out",
      });
    }
  }, [filter.filterShouldStick]);

  useEffect(() => {
    if (filter.filterIsOpen) {
      gsap.fromTo(
        "#filter-body",
        { autoAlpha: 0, x: -300 },
        { autoAlpha: 1, x: 0, duration: 0.5, display: "block" }
      );
    } else {
      gsap.fromTo(
        "#filter-body",
        { autoAlpha: 1, x: 0, display: "block" },
        {
          autoAlpha: 1,
          x: -300,
          duration: 0.5,
        }
      );
    }
  }, [filter.filterIsOpen]);

  useEffect(() => {
    const filters = {
      ...price,
      brand: Array.from(brandSetItemsValues),
      manufacture: Array.from(manufactureSetItemsValues),
      size: Array.from(sizeSetItemsValues),
    };
    const query = qs.stringify(filters, { arrayFormat: "comma" });
    router.push(`?${query}`, { scroll: false });
  }, [
    router,
    price,
    brandSetItemsValues,
    manufactureSetItemsValues,
    sizeSetItemsValues,
  ]);

  const handleShowFilter = () => {
    dispatch(setFilterIsOpen(!filter.filterIsOpen));
  };

  const brandItems: Item[] = brands.map((brand) => ({
    value: brand.slug,
    slug: brand.slug,
    text: brand.name,
    productAmount: brand._count,
  }));
  const manufactureItems: Item[] = manufactures.map((manufacture) => ({
    value: manufacture.slug,
    slug: manufacture.slug,
    text: manufacture.name,
    productAmount: manufacture._count,
  }));

  const allSizes: number[] = sizes
    .flatMap((size) => {
      const allSizes = size.variants.map((variant) => variant.size);
      return allSizes;
    })
    .sort((a, b) => a - b);

  const uniqSizes = Array.from(new Set(allSizes));
  const sizeItems: Item[] = uniqSizes.map((size) => ({
    value: String(size),
    slug: String(size),
    text: String(size),
  }));
  return (
    <div className="flex  flex-col w-full ">
      <div
        className={`flex justify-between   items-center sticky ${
          filter.filterShouldStick ? "top-0 shadow-lg" : "top-[60px] border-t-2"
        } left-0 z-30 backdrop-blur-md h-[50px] w-full `}
        ref={filterRef}
      >
        <Button variant={"outline"} onClick={handleShowFilter}>
          <p>{!filter.filterIsOpen ? "Show filters" : "Close filters"}</p>
        </Button>
        <Select>
          <SelectTrigger className="w-[180px] flex ">
            <div className="flex gap-2">
              Order by:
              <SelectValue placeholder="Rating" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="rating">Rating</SelectItem>
              <SelectItem value="cost">Cost</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className={`flex w-full  transition-all`}>
        <div
          className={`sticky ${
            filter.filterIsOpen ? "top-[120px] " : "top-[50px]  opacity-0 "
          } z-auto left-0 h-[350px] transition-opacity `}
          ref={filterBodyRef}
        >
          <div
            className={`flex flex-col gap-4 min-h-full invisible   ${
              filter.filterIsOpen ? "w-[350px]" : "absolute w-[240px] "
            } pr-4`}
            id="filter-body"
          >
            <PriceRange price={price} setPrice={setPrice} />
            <FilterCategory
              categories={[
                {
                  name: "Brand",
                  properties: brandItems,
                  filterSet: brandItemsFilterSet,
                },
                {
                  name: "Manufacture",
                  properties: manufactureItems,
                  filterSet: manufactureItemsFilterSet,
                },
                {
                  name: "Sizes",
                  properties: sizeItems,
                  filterSet: sizesItemsFilterSet,
                },
              ]}
            />
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Filter;
