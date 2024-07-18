import { NavbarItem, NavbarContent } from "@nextui-org/react";
import Link from "next/link";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import { navBardData } from "./data";
import gsap from "gsap";
import Buttons from "./Buttons";
import DropdownContent from "./DropdownContent";

const NavButtonWithDropdownMenuWrapper = ({
  hoveredButton,
  setHoveredButton,
}: {
  hoveredButton: string | null;
  setHoveredButton: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
  const prevHoveredButtonRef = useRef<string | null>(null);

  useEffect(() => {
    prevHoveredButtonRef.current = hoveredButton;
  }, [hoveredButton]);

  const handleDropDownTrigger = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const buttonKey = e.currentTarget.getAttribute("data-key");

    if (buttonKey) {
      setHoveredButton(buttonKey);
    }
  };

  return (
    <NavbarContent>
      <div
        className="w-full flex h-full"
        onMouseLeave={() => setHoveredButton(null)}
      >
        <Buttons
          handleDropDownTrigger={handleDropDownTrigger}
          hoveredButton={hoveredButton}
        />
        {hoveredButton && (
          <DropdownContent
            pageSlug={hoveredButton}
            hoveredButton={hoveredButton}
            prevButtonState={prevHoveredButtonRef.current}
          />
        )}
      </div>
    </NavbarContent>
  );
};

export default NavButtonWithDropdownMenuWrapper;
