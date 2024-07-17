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

  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  return (
    <div className="main-tool-bar  w-full  ">
      <Navbar className="text-black  max-navbar-w-disable w-full" isBordered>
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
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const buttonKey = e.currentTarget.getAttribute("data-key");

    if (buttonKey) {
      setHoveredButton(buttonKey);
    }
  };
  const Buttons = navBardData.pages.map((page, i) => (
    <NavbarItem key={i} className="w-full ">
      <Link
        href={page.link}
        key={page.slug}
        data-key={page.slug}
        onMouseEnter={(e) => handleDropDownTrigger(e)}
        className=" border-b-4 h-full w-full flex justify-center items-center font-bold hover:border-b-4 hover:border-b-green-500 transition-colors duration-200"
      >
        <p>{page.label}</p>
      </Link>
    </NavbarItem>
  ));
  useLayoutEffect(() => {
    console.log("🚀 ~ hoveredButton:", hoveredButton);

    gsap.from(".dropdown-menu", { x: 0, y: -100, zIndex: -1110, opacity: 0 });
    gsap.to(".dropdown-menu", { x: 0, y: 0, zIndex: -10, opacity: 1 });
  }, [hoveredButton]);
  return (
    <NavbarContent>
      <div
        className="w-full flex h-full "
        onMouseLeave={() => setHoveredButton(null)}
      >
        {Buttons}
        {!hoveredButton && (
          <div className="dropdown-menu absolute w-full  left-0  top-[30px] overflow-hidden border-t-2 border-b-2 border-violet-500 bg-slate-700">
            {hoveredButton}
            <div className="flex w-full  justify-center py-8">
              <div className="max-w-xl w-full  ">
                <div className="flex gap-28 flex-wrap">
                  {navBardData.pages[0].categories?.map((category) => (
                    <div key={category.label} className="flex flex-col l">
                      <p className="text-gray-400 text-left pb-2 capitalize text-[0.8rem]  font-bold">
                        {category.label.toUpperCase()}
                      </p>
                      {category.data.map((d) => (
                        <p
                          className="pt-4 pl-2 text-left text-gray-200 capitalize text-[0.6rem] font-light"
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
          </div>
        )}
      </div>
    </NavbarContent>
  );
};
