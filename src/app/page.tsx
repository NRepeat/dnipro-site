"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Slider from "./components/ui/Slider/EmblaCarousel";
import { useEffect, useRef } from "react";
import Welcome from "./components/Welcome/Welcome";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  const categoriesData = ["box-1", "box-2", "box-3"];
  const cartIds = categoriesData.map((category) => `#${category}`);

  // Конечная анимация для всех элементов
  // tl.to(cartIds, {
  //   opacity: 1,
  //   x: 0,
  //   stagger: {
  //     amount: 1,
  //     from: "center",
  //     ease: "power2.inOut", // Плавный старт и остановка
  //   },
  //   duration: 0.6,
  // });
  // const updateValues = () => {
  //   const position = ScrollTrigger.positionInViewport(
  //     "#box-2",
  //     "center"
  //   ).toFixed(2);
  //   console.log("🚀 ~ Home ~ position:", position);
  // };
  // ScrollTrigger.create({
  //   start: 0,
  //   end: "max",
  //   onUpdate: updateValues,
  // });
  // updateValues();

  return (
    <main className="">
      <Welcome />
    </main>
  );
}

export const NavBar = () => {
  const comp = useRef(null);

  useGSAP(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.fromTo(
        "#nav-bar-1",
        {
          opacity: 0,
          y: -40,
        },
        {
          y: 0,
          opacity: 1,
        }
      );
    }, comp);

    return () => ctx.revert();
  }, []);
  return (
    <Navbar shouldHideOnScroll ref={comp} id="nav-bar-1">
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
  );
};
