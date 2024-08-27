import { Checkbox } from "@/components/ui/checkbox";
import React, { ButtonHTMLAttributes } from "react";

export interface FilterCheckboxProps {
  text: string;
  slug?: string;
  value: string;
  endAdornment?: React.ReactNode;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
  productAmount?: { product: number };
  disabled?: boolean;
}

export const FilterCheckbox: React.FC<FilterCheckboxProps> = ({
  text,
  value,
  endAdornment,
  onCheckedChange,
  checked,
  slug,
  disabled,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        onCheckedChange={onCheckedChange}
        checked={checked}
        value={value}
        disabled={disabled}
        className="rounded-[8px] w-6 h-6"
        id={`checkbox-${String(value)}-${slug}`}
      />
      <label
        htmlFor={`checkbox-${String(value)}-${slug}`}
        className="leading-none cursor-pointer flex-1"
      >
        {text}
      </label>
      {endAdornment}
    </div>
  );
};
