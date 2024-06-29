"use client";
import { useGSAP } from "@gsap/react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import gsap from "gsap";
import Link from "next/link";
import { useRef } from "react";

export const NavBar = () => {
  const comp = useRef(null);

  useGSAP(() => {
    gsap.from("#nav-bar-1", {
      opacity: 0,
      y: -10,
      delay: 1,
    });
    gsap.to("#nav-bar-1", {
      opacity: 1,
      y: 0,
      delay: 1,
    });
    // let ctx = gsap.context(() => {
    //   const t1 = gsap.timeline();
    //   t1.to("#nav-bar-1", {
    //     opacity: 1,
    //     y: 0,
    //   });
    // }, comp);

    // return () => ctx.revert();
  }, []);
  return (
    // <div className="flex opacity-0" id="nav-bar-1" ref={comp}>
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
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
    // </div>
  );
};
