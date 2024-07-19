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
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { navBardData } from "./data";
import NavButtonWithDropdownMenuWrapper from "./DropdownMenu";

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

  return (
    <div className="main-tool-bar  w-full  ">
      <Navbar className="text-black  max-navbar-w-disable w-full" isBordered>
        <NavbarBrand>
          <Link href="/">Brand</Link>
        </NavbarBrand>
        <NavButtonWithDropdownMenuWrapper />
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
