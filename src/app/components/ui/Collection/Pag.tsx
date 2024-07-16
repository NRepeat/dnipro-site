"use client";
import { PaginationItemType, usePagination } from "@nextui-org/react";
import React, { useEffect } from "react";
import { ChevronIcon } from "./Point";

const Pag = ({ total, index }: { total: number; index: number }) => {
  const { activePage, range, setPage, onNext, onPrevious } = usePagination({
    total,
    showControls: false,
  });
  useEffect(() => {
    setPage(index + 1);
  }, [index, setPage]);
  return (
    <div className="flex w-full">
      <div className="flex flex-row justify-center w-full gap-1">
        {range.map((page) => {
          if (page === PaginationItemType.NEXT) {
            return (
              <li key={page} aria-label="next page" className="w-4 h-4">
                <button
                  className="w-full h-full bg-default-200 rounded-full"
                  onClick={onNext}
                >
                  <ChevronIcon className="rotate-180" />
                </button>
              </li>
            );
          }

          if (page === PaginationItemType.PREV) {
            return (
              <li key={page} aria-label="previous page" className="w-4 h-4">
                <button
                  className="w-full h-full bg-default-200 rounded-full"
                  onClick={onPrevious}
                >
                  <ChevronIcon />
                </button>
              </li>
            );
          }

          if (page === PaginationItemType.DOTS) {
            return (
              <li key={page} className=" bg-black w-4 h-4">
                ...
              </li>
            );
          }

          return (
            <div
              key={page}
              aria-label={`page ${page}`}
              className={`w-full h-1  bg-gray-200 relative`}
            >
              <button
                className={`w-full h-1
								${
                  activePage === page && "bg-gray-500"
                } transition-background duration-250 absolute top-0`}
                onClick={() => setPage(page)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pag;
