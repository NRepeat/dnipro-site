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
} from "@nextui-org/react";
import { AnimationDefinition } from "framer-motion";
import gsap, { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import Link from "next/link";
import React, { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";

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
    <nav className="main-tool-bar backdrop-blur-sm">
      <Navbar>
        <NavbarBrand>
          <Link href="/">Brand</Link>
        </NavbarBrand>
        <NavbarContent>
          <NavbarItem>
            <Link href="/about">About</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/contact">Contact</Link>
          </NavbarItem>
        </NavbarContent>
        <Button>Sign In</Button>
      </Navbar>
    </nav>
  );
};

export default NavBar;
