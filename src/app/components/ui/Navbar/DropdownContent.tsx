import React, { useEffect, useLayoutEffect, useRef } from "react";
import { navBardData } from "./data";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { NavigationMenuContent } from "@/components/ui/navigation-menu";
import Link from "next/link";

const DropdownContent = ({ pageSlug }: { pageSlug: string | null }) => {
  const pageData = navBardData.pages.find((page) => page.slug === pageSlug);
  const pageCategoryData =
    pageData && pageData.categories?.map((categories) => categories);

  return (
    <>
      {pageCategoryData && (
        <NavigationMenuContent>
          <div className="bg-gray-100 w-full flex divide-x-2 gap-2">
            {pageCategoryData &&
              pageCategoryData?.length > 0 &&
              pageCategoryData.map((category) => (
                <div
                  key={category.label}
                  className="flex flex-col px-8 pb-4 justify-start  pt-2 w-[150px]"
                >
                  <Link
                    href={"/"}
                    className="text-left capitalize text-[1rem] font-bold w-fit "
                  >
                    {category.label.toUpperCase()}
                  </Link>
                  {category?.data.map((d) => (
                    <Link
                      href={"/"}
                      className="pt-4 text-left capitalize text-[0.9rem] font-light hover:underline"
                      key={d.label}
                    >
                      {d.label.toUpperCase()}
                    </Link>
                  ))}
                </div>
              ))}
          </div>
        </NavigationMenuContent>
      )}
    </>
  );
};

export default DropdownContent;
