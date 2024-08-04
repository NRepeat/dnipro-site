"use client";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useDebounce } from "react-use";
import { useClickAway } from "@uidotdev/usehooks";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import React, { FC, useEffect, useRef, useState } from "react";
import Api from "@/app/services/api-client";
import { Product } from "@prisma/client";
import { AxiosResponse } from "axios";
import Link from "next/link";

type SearchInputProps = {
  className?: string;
};

const SearchInput: FC<SearchInputProps> = ({ className }) => {
  const [focus, setOnFocus] = useState<boolean>(false);
  const [searchInputValue, setSearchInputValue] = useState<string>("");
  const [products, setProducts] = useState<Product[]>([]);
  const ref = useClickAway(() => {
    setOnFocus(false);
  }) as any;

  useDebounce(
    () => {
      Api.productsAPIactions
        .searchProducts(searchInputValue)
        .then((products) => setProducts(products.data));
    },
    200,
    [searchInputValue]
  );

  const handleSearchInputChange = (value: string) => {
    setSearchInputValue(value);
  };

  const handleOnProductClick = () => {
    setProducts([]);
    setSearchInputValue("");
    setOnFocus(false);
  };
  return (
    <div className="relative">
      <Command className="">
        <Input
          onChange={(e) => handleSearchInputChange(e.target.value)}
          placeholder="Type a command or search..."
          onFocus={() => setOnFocus(true)}
          value={searchInputValue}
        />
        {focus && (
          <CommandList
            ref={ref}
            className="bottom-[-65px] z-50 absolute bg-white w-full"
          >
            <CommandGroup>
              {products.map((product) => (
                <Link
                  onClick={handleOnProductClick}
                  key={product.uid}
                  href={"/product/" + product.uid}
                  prefetch
                >
                  {product.title}
                </Link>
              ))}
            </CommandGroup>
          </CommandList>
        )}
      </Command>
    </div>

    // <div className="relative">
    //   <Input
    //     onFocus={() => setOnFocus(true)}
    //     placeholder="Type to search..."
    //     type="search"
    //     className="w-48 "
    //   />
    //   {focus && (
    //     <div className={cn("flex bg-white absolute bottom-[-20px] left-0  ")}>
    //       <div>1.Product</div>
    //       <DropdownMenu open>
    //         <DropdownMenuContent className="w-56"></DropdownMenuContent>
    //         <DropdownMenuItem>test</DropdownMenuItem>
    //       </DropdownMenu>
    //     </div>
    //   )}
    // </div>
  );
};

export default SearchInput;
