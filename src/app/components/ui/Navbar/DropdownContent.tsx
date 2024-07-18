import React, { useEffect, useLayoutEffect, useRef } from "react";
import { navBardData } from "./data";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const DropdownContent = ({
  hoveredButton,
  prevButtonState,
  pageSlug,
}: {
  hoveredButton: string | null;
  prevButtonState: string | null;
  pageSlug: string | null;
}) => {
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const dropdownContentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (dropdownRef.current) {
      if (!prevButtonState && hoveredButton) {
        gsap.fromTo(
          dropdownRef.current,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 0.5,
          }
        );

        // gsap.fromTo(
        //   dropdownContentRef.current,
        //   { opacity: 0 },
        //   { opacity: 0, delay: 0.1, duration: 0.5 }
        // );
      } else {
        gsap.fromTo(
          dropdownRef.current,
          {
            opacity: 1,
          },
          {
            opacity: 0,
            duration: 0.5,
          }
        );
      }
      if (prevButtonState && hoveredButton) {
        const toh = dropdownContentRef.current?.clientHeight;
        gsap.fromTo(
          dropdownContentRef.current,
          { opacity: 0, height: 0, overflow: "hidden" },
          {
            opacity: 1,
            delay: 0.1,
            duration: 1,
            height: "auto",
            overflow: "auto",
          }
        );
        gsap.fromTo(
          dropdownRef.current,
          {
            opacity: 1,
            overflow: "hidden",
          },
          {
            opacity: 1,
            duration: 0.5,
            overflow: "auto",
          }
        );
      }
    }
  }, [hoveredButton, prevButtonState]);

  const pageData = navBardData.pages.find((page) => page.slug === pageSlug);
  const pageCategoryData =
    pageData && pageData.categories?.map((categories) => categories);

  return (
    <div
      ref={dropdownRef}
      className="dropdown-menu absolute w-full  left-0 top-[60px]  border-t-2 border-b-2 border-violet-500 bg-slate-700 overflow-hidden"
    >
      {hoveredButton}
      <div
        ref={dropdownContentRef}
        className="dropdown-wrapper  text-black flex w-full  justify-center  bg-slate-50   border-black border-2  overflow-hidden max-h-[500px]"
      >
        <div className="flex py-8 gap-28 flex-wrap justify-evenly  ">
          {pageCategoryData &&
            pageCategoryData.map((category) => (
              <div key={category.label} className="flex flex-col">
                <p className="text-left pb-2 capitalize text-[0.8rem] font-bold">
                  {category.label.toUpperCase()}
                </p>
                {category?.data.map((d) => (
                  <p
                    className="pt-4 pl-2 text-left capitalize text-[0.6rem] font-light"
                    key={d.label}
                  >
                    {d.label.toUpperCase()}
                  </p>
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default DropdownContent;
