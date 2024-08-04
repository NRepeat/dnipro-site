"use client";

import React, { useEffect } from "react";
import { useSet } from "react-use";
import {
  FilterCheckbox,
  FilterCheckboxProps,
} from "../CustomCheckbox/CustomCheckbox";
import { Input } from "@/components/ui/input";
import { useSelector } from "react-redux";
import { FilterStateType, setFilterState } from "@/app/store/slice/filterSlice";

export type Item = FilterCheckboxProps;

interface Props {
  items: Item[];
  defaultItems?: Item[];
  limit?: number;
  searchInputPlaceholder?: string;
  className?: string;
  onChange?: (values: string[]) => void;
  defaultValue?: string[];
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = "Пошук...",
  className,
  onChange,
  defaultValue,
}) => {
  const [showAll, setShowAll] = React.useState(false);
  const [selected, { add, toggle }] = useSet<string>(new Set([]));
  const filter = useSelector(
    (state: { filter: FilterStateType }) => state.filter
  );
  const onCheckedChange = (value: string) => {
    setFilterState({ categories: value });
  };

  useEffect(() => {
    if (defaultValue) {
      defaultValue.forEach(add);
    }
  }, [defaultValue?.length, add, defaultValue]);

  useEffect(() => {
    onChange?.(Array.from(selected));
  }, [selected, onChange]);

  return (
    <div className={className}>
      {showAll && (
        <div className="mb-5">
          <Input
            placeholder={searchInputPlaceholder}
            className="bg-gray-50 border-none"
          />
        </div>
      )}

      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {(showAll ? items : defaultItems || items).map((item) => (
          <FilterCheckbox
            onCheckedChange={() => onCheckedChange(item.value)}
            checked={selected.has(item.value)}
            key={String(item.value)}
            value={item.value}
            text={item.text}
            endAdornment={item.endAdornment}
          />
        ))}
      </div>

      {items.length > limit && (
        <div className={showAll ? "border-t border-t-neutral-100 mt-4" : ""}>
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-primary mt-3"
          >
            {showAll ? "Скрыть" : "+ Показать все"}
          </button>
        </div>
      )}
    </div>
  );
};
