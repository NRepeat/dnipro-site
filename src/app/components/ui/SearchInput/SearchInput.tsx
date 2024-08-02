"use client";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import React, { FC, useState } from "react";

type SearchInputProps = {
  className?: string;
};

const SearchInput: FC<SearchInputProps> = ({ className }) => {
  const [focus, setOnFocus] = useState<boolean>(false);
  return (
    <>
      {focus && (
        <div className="fixed h-screen top-0 left-0 bottom-0 right-0 bg-black/50 z-30"></div>
      )}
      <div className={cn("flex", className)}></div>
      <Input
        onFocus={() => setOnFocus(true)}
        placeholder="Type to search..."
        type="search"
        className="w-48"
      />
    </>
  );
};

export default SearchInput;
