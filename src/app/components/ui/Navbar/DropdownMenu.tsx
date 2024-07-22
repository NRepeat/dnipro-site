import { NavbarItem, NavbarContent } from "@nextui-org/react";
import Link from "next/link";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { navBardData } from "./data";
import gsap from "gsap";
import Buttons from "./Buttons";
import DropdownContent from "./DropdownContent";
import { useGSAP } from "@gsap/react";

const NavButtonWithDropdownMenuWrapper = () => {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const [mouseLeave, setMouseLeave] = useState<boolean>(true);

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
      setMouseLeave(false);
    }
  };
  const handleOnMouseLeave = async () => {
    setMouseLeave(true);
    setHoveredButton(null);
  };

  return (
    <NavbarContent>
      <div
        className="w-full flex h-full"
        onMouseLeave={() => handleOnMouseLeave()}
      >
        <Buttons
          handleDropDownTrigger={handleDropDownTrigger}
          hoveredButton={hoveredButton}
        />
        {
          <DropdownContent
            mouseLeave={mouseLeave}
            pageSlug={hoveredButton}
            hoveredButton={hoveredButton}
            prevButtonState={prevHoveredButtonRef.current}
          />
        }
      </div>
    </NavbarContent>
  );
};

export default NavButtonWithDropdownMenuWrapper;
