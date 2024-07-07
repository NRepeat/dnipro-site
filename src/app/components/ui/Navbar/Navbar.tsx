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
import Link from "next/link";
import { useDispatch } from "react-redux";

export const NavBar = () => {
  const dispatch = useDispatch();

  const handleOnScrollPositionChange = (e: AnimationDefinition) => {
    dispatch(setFilterShouldStick(e === "visible" ? false : true));
  };
  return (
    <Navbar
      shouldHideOnScroll
      disableScrollHandler
      // onScrollPositionChange={handleOnScrollPositionChange}
      // onMenuOpenChange={handleOnScrollPositionChange}
      motionProps={{
        onAnimationComplete: (e) => handleOnScrollPositionChange(e),
      }}
    >
      <NavbarBrand>
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link color="foreground" href="/" prefetch={true}>
            Жіноче
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/man" aria-current="page">
            Чоловіче
          </Link>
        </NavbarItem>
      </NavbarContent>
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
  );
};
