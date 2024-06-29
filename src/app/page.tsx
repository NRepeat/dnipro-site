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
import CardWithTextFullWidth from "./components/Card/Card";
export default function Home() {
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
  useGSAP(() => {}, []);
  return (
    <main className="bg-gradient-to-r h-full from-slate-300 to-slate-500 flex flex-col">
      <Welcome />
      <CardWithTextFullWidth id="brand-cards" />
    </main>
  );
}
