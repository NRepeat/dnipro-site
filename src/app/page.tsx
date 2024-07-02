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
import ScrollSection from "./components/ui/HorizontalScroll/HorizontalScroll";
export default function Home() {
  const comp = useRef(null);

  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      // t1.from("#intro-slider", {
      //   xPercent: "-100",
      //   duration: 0.6,
      //   delay: 0.3,
      // })

      // .to("#intro-slider", {
      //   xPercent: "-100",
      //   duration: 0.6,
      // })

      t1.from(["#card-1", "#card-2", "#card-3"], {
        opacity: 0,

        duration: 1,
        ease: "power2.out",
        stagger: { from: "start", amount: 0.5 },
      }).to(["#card-1", "#card-2", "#card-3"], {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        stagger: { from: "start", amount: 0.5 },
      });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <main
      className="bg-gradient-to-r h-full from-slate-300 to-slate-500 flex flex-col"
      ref={comp}
    >
      <Welcome />
      <ScrollSection />
      <footer className="footer">
        <span>Footer</span>
      </footer>
    </main>
  );
}
