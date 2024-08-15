"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LucideMinus, LucidePlus } from "lucide-react";
import React, { FC } from "react";
import { GoPlus } from "react-icons/go";
interface Props {
  value?: number;
  className?: string;
  onClick: (type: "plus" | "minus") => void;
}
const CountButton: FC<Props> = ({ className, onClick, value = 1 }) => {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-between gap-3",
        className
      )}
    >
      <ActionButton onClick={onClick} disabled={value === 1} type="minus" />
      <b>{value}</b>
      <ActionButton onClick={onClick} type="plus" />
    </div>
  );
};

interface ActionProp extends Props {
  disabled?: boolean;
  type: "plus" | "minus";
}
const ActionButton: FC<ActionProp> = ({ disabled, type, onClick }) => {
  return (
    <Button
      className=""
      variant={"outline"}
      onClick={() => onClick(type)}
      disabled={disabled}
    >
      {type === "plus" ? (
        <LucidePlus className="w-4 h-4" />
      ) : (
        <LucideMinus className="w-4 h-4" />
      )}
    </Button>
  );
};

export default CountButton;
