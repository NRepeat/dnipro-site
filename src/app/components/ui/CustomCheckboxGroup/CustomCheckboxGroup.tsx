"use client";
import React, { FC, useEffect, useState } from "react";
import {
  FilterCheckbox,
  FilterCheckboxProps,
} from "../CustomCheckbox/CustomCheckbox";
import { Input } from "@/components/ui/input";
import { Actions } from "react-use/lib/useSet";

export type Item = FilterCheckboxProps;

interface Props {
  items: Item[];
  filterSet: [Set<string>, Actions<string>];
  defaultItems?: Item[];
  limit?: number;
  searchInputPlaceholder?: string;
  className?: string;
  onChange?: (values: string[]) => void;
  defaultValue?: string[];
}

export const CheckboxFiltersGroup: FC<Props> = ({
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = "Пошук...",
  className,
  onChange,
  defaultValue,
  filterSet,
}) => {
  const [showAll, setShowAll] = useState(false);
  const [selected, { add, toggle }] = filterSet;
  const onCheckedChange = (value: string) => {
    toggle(value);
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
            slug={item.slug}
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
