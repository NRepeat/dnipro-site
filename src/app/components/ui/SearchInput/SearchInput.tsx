"use client";
import { Command, CommandGroup, CommandList } from "@/components/ui/command";
import { useDebounce } from "react-use";
import { useClickAway } from "@uidotdev/usehooks";
import { Input } from "@/components/ui/input";
import React, { FC, useState } from "react";
import Api from "@/app/services/api-client";
import { Product } from "@prisma/client";
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
      if (searchInputValue) {
        Api.productsAPIactions
          .searchProducts(searchInputValue)
          .then((products) => setProducts(products.data));
      }
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
  );
};

export default SearchInput;
