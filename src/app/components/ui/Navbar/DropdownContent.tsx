import React, { useEffect, useLayoutEffect, useRef } from "react";
import { navBardData } from "./data";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const DropdownContent = ({
  hoveredButton,
  prevButtonState,
  pageSlug,
  mouseLeave,
}: {
  hoveredButton: string | null;
  prevButtonState: string | null;
  pageSlug: string | null;
  mouseLeave: boolean;
}) => {
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const dropdownContentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (dropdownRef.current) {
      if (!prevButtonState && hoveredButton) {
        gsap.fromTo(
          dropdownRef.current,
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            duration: 0.5,
          }
        );
      } else if (prevButtonState && hoveredButton) {
        gsap.from(dropdownRef.current, {
          autoAlpha: 1,
        });
        gsap.from(dropdownContentRef.current, {
          autoAlpha: 0,
          duration: 0.5,
        });
        gsap.to(dropdownRef.current, {
          autoAlpha: 1,
        });
      } else if (mouseLeave) {
        // gsap.fromTo(
        //   dropdownRef.current,
        //   {
        //     autoAlpha: 1,
        //   },
        //   {
        //     autoAlpha: 1,
        //     duration: 0.5,
        //   }
        // );
      }
    }
  }, [hoveredButton, prevButtonState, mouseLeave]);

  const pageData = navBardData.pages.find((page) => page.slug === pageSlug);
  const pageCategoryData =
    pageData && pageData.categories?.map((categories) => categories);

  return (
    <>
      {pageCategoryData && (
        <div
          ref={dropdownRef}
          className={`dropdown-menu absolute w-full  left-0 top-[65px]  border-t-2 border-b-2 border-violet-500 bg-slate-700  opacity-0`}
        >
          {hoveredButton}
          <div
            ref={dropdownContentRef}
            className="dropdown-wrapper  text-black flex w-full  justify-center  bg-slate-50   border-black border-2   overflow-auto max-h-[500px]"
          >
            <div className="flex py-8 gap-28 flex-wrap justify-evenly  ">
              {pageCategoryData &&
                pageCategoryData?.length > 0 &&
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
      )}
    </>
  );
};

export default DropdownContent;
