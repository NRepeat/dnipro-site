"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Slider from "./components/ui/Slider/EmblaCarousel";
import { useEffect } from "react";
import Welcome from "./components/Welcome/Welcome";
export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  const categoriesData = ["box-1", "box-2", "box-3"];
  const cartIds = categoriesData.map((category) => `#${category}`);
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(cartIds[1], {
      opacity: 0,
      x: 0, // Смещение по оси X для эффекта подъема
      y: 100,
      yoyo: true,
      duration: 0.6, // Длительность анимации для каждого элемента
    });
    tl.to(cartIds[1], {
      x: 0,
      y: -20,
      opacity: 1,
      stagger: {
        yoyo: true,
        amount: 0.5,
        from: "center",
        ease: "linier", // Плавный старт и остановка
      },
      duration: 0.6,
    });
    tl.to(cartIds[3], {
      x: 0,
      y: -50,
      opacity: 1,
      scrollTrigger: {
        trigger: cartIds[2],
        markers: true,
      },
      stagger: {
        yoyo: true,
        amount: 0.5,
        from: "center",
        ease: "linier", // Плавный старт и остановка
      },
      duration: 0.6,
    });

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
  }, []);

  const div1 = (
    <div id="box-2" className="card">
      2
    </div>
  );
  const div2 = (
    <div id="box-3" className="card">
      2
    </div>
  );
  const data = [
    // [div2, div2, div2, div2],
    [div1, div1, div1, div1, div1],
  ];
  // const data = ["1", "2", "3"];

  return (
    <main className="">
      {/* <div id="box-1" className="h-screen flex items-center ">
        1
      </div> */}

      {/* <div id="box-2" className="card">
          2
        </div>
        <div id="box-2" className="card">
          2
        </div>
        <div id="box-2" className="card">
          2
        </div> */}
      <Welcome />
      {/* <Slider
          options={{}}
          delay={3000}
          slides={data}
          playOnInit={false}
          slideStyle="flex items-center justify-center gap-2"
        ></Slider> */}

      {/* <div id="box-3" className="h-screen flex items-center">
        3
      </div> */}
    </main>
  );
}
