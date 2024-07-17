"use client";
import {
  FilterStateType,
  setFilterShouldStick,
} from "@/app/store/slice/filterSlice";
import { useGSAP } from "@gsap/react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { AnimationDefinition } from "framer-motion";
import gsap, { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import Link from "next/link";
import React, { useLayoutEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { navBardData } from "./data";

const NavBar = () => {
  const dispatch = useDispatch();

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const handleOnScrollPositionChange = (direction: number) => {
      direction === -1 ? showAnim.play() : showAnim.reverse();
      dispatch(setFilterShouldStick(direction === -1 ? false : true));
    };

    const showAnim = gsap
      .from(".main-tool-bar", {
        yPercent: -100,
        paused: true,
        duration: 0.2,
      })
      .progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => handleOnScrollPositionChange(self.direction),
    });
  }, [dispatch]);
  const [isOpenDropDownMenu, setIsOpenDropDownMenu] = useState<boolean>(false);
  const dropDownRef = useRef(null);
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const handleDropDownTrigger = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (e.currentTarget) {
      setIsOpenDropDownMenu(true);
    }
  };
  const handleDropDownTriggerClose = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setIsOpenDropDownMenu(false);
  };
  const handleDropDownButtonTriggerClose = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    // setIsOpenDropDownMenu(false);
  };
  return (
    <div className="main-tool-bar relative w-full">
      <Navbar className="text-black max-navbar-w-disable w-full" isBordered>
        <NavbarBrand>
          <Link href="/">Brand</Link>
        </NavbarBrand>
        <NavButtonWithDropdownMenuWrapper
          hoveredButton={hoveredButton}
          setHoveredButton={setHoveredButton}
        />
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
};

export default NavBar;

const NavButtonWithDropdownMenuWrapper = ({
  hoveredButton,
  setHoveredButton,
}: {
  hoveredButton: string | null;
  setHoveredButton: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
  const handleDropDownTrigger = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const buttonKey = e.currentTarget.getAttribute("data-key");

    if (buttonKey) {
      setHoveredButton(buttonKey);
    }
  };
  const Buttons = navBardData.pages.map((page, i) => (
    <NavbarItem key={i}>
      <Button
        key={page.slug}
        data-key={page.slug}
        onMouseEnter={(e) => handleDropDownTrigger(e)}
        disableRipple
        className="p-0 h-full bg-transparent data-[hover=true]:bg-transparent "
        radius="sm"
        variant="light"
      >
        {page.label}
      </Button>
    </NavbarItem>
  ));
  return (
    <NavbarContent>
      <div
        className="w-full flex h-full justify-evenly"
        onMouseLeave={() => setHoveredButton(null)}
      >
        {Buttons}
        {!hoveredButton && (
          <div className="absolute w-full left-0 bg-violet-500  z-20 top-[60px] overflow-hidden">
            <div className=" w-full bg-black">
              {hoveredButton}
              <div className="flex w-full  justify-center py-8">
                <div className="max-w-xl w-full flex gap-12">
                  <div className="flex gap-8">
                    {navBardData.pages[0].categories?.map((category) => (
                      <div
                        key={category.label}
                        className="flex flex-col h-full"
                      >
                        <p className="text-gray-400 text-left pb-2 capitalize text-[0.6rem]">
                          {category.label.toUpperCase()}
                        </p>
                        {category.data.map((d) => (
                          <p
                            className="pt-4 pl-2 text-left text-gray-200 capitalize text-[0.6rem]"
                            key={category.label}
                          >
                            {d.label.toUpperCase()}
                          </p>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </NavbarContent>
  );
};
