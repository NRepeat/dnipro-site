import { navBardData } from "./data";
import { NavigationMenuContent } from "@/components/ui/navigation-menu";
import Link from "next/link";

const DropdownContent = ({ pageSlug }: { pageSlug: string | null }) => {
  const pageData = navBardData.pages.find((page) => page.slug === pageSlug);
  const pageCategoryData =
    pageData && pageData.categories?.map((categories) => categories);

  return (
    <>
      {pageCategoryData && (
        <NavigationMenuContent className="flex ">
          <div className="bg-gray-100 w-full min-w-[200px] justify-center flex divide-x-2 gap-2">
            {pageCategoryData &&
              pageCategoryData?.length > 0 &&
              pageCategoryData.map((category) => (
                <div
                  key={category.link}
                  className={`flex flex-col px-8 pb-8 justify-start  pt-2  ${
                    category?.data.length === 0 ? "min-w-[350px]" : "w-[150px]"
                  }`}
                >
                  <Link
                    href={category.label}
                    className={`text-left capitalize text-[1rem] font-bold  `}
                  >
                    {category.label.toUpperCase()}
                  </Link>
                  {category?.data.map((d) => (
                    <Link
                      href={d.link}
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
