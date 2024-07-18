import { NavbarItem } from "@nextui-org/react";
import Link from "next/link";
import { navBardData } from "./data";

const Buttons = ({
  handleDropDownTrigger,
  hoveredButton,
}: {
  handleDropDownTrigger: (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => void;
  hoveredButton: string | null;
}) =>
  navBardData.pages.map((page, i) => (
    <NavbarItem key={i} className="w-full ">
      <Link
        href={page.link}
        key={page.slug}
        data-key={page.slug}
        onMouseEnter={(e) => handleDropDownTrigger(e)}
        className={`border-b-4 h-full w-full flex justify-center items-center font-bold hover:border-b-4 hover:border-b-green-500 transition-colors duration-200 ${
          page.slug === hoveredButton && "border-b-green-500"
        }`}
      >
        <p>{page.label}</p>
      </Link>
    </NavbarItem>
  ));
export default Buttons;
