"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import Welcome from "./components/Welcome/Welcome";

import ScrollSection from "./components/ui/HorizontalScroll/HorizontalScroll";
import CardGrid from "./components/ui/CardGrid/CardGrid";
import image from "./utils/assets/images";
import CustomCard from "./components/ui/Card/Card";
import SliderCustom from "./components/ui/Slider/EmblaCarousel";
export default function Home() {
  const comp = useRef(null);

  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();

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
  const { image1, image2, image3, image5 } = image.models;

  const brandCards = Object.keys(image.brandsIcons).map((key, i) => (
    <CustomCard image={image.brandsIcons[key]} id={key} key={key} />
  ));
  return (
    <main
      className="bg-gradient-to-r h-full from-slate-300 to-slate-500 flex flex-col"
      ref={comp}
    >
      <Welcome />
      <ScrollSection />

      <SliderCustom delay={5000} options={{ loop: true }} playOnInit>
        <div className="embla__slide h-full">
          <div className={` h-full`}>
            <div className="w-full  ">
              <CardGrid cards={brandCards} columns={3} rows={3} />
              <CardGrid cards={brandCards} columns={3} rows={3} />
            </div>
          </div>
        </div>
        <div className="embla__slide h-full">
          <div className={` h-full`}>
            <div className="w-full  ">
              <CardGrid cards={brandCards} columns={3} rows={3} />
              <CardGrid cards={brandCards} columns={3} rows={3} />
            </div>
          </div>
        </div>
      </SliderCustom>

      {/* <div className="scroll-section bg-black flex justify-center ">
        <div className="w-full flex justify-center flex-col  relative items-center">
          <div className="w-full flex ">
            <Image
              src={image5}
              alt="image1"
              className="w-1/3 h-auto object-cover"
            />
            <Image
              src={image2}
              alt="image1"
              className="w-1/3 h-auto object-cover"
            />
            <Image
              src={image3}
              alt="image1"
              className="w-1/3 h-auto object-cover"
            />
          </div>
          <div className="w-10/12 pl-8 flex flex-col justify-evenly ">
            <div className="absolute text-white bottom-44 left-[100px]">
              <h1 className="text-9xl">Software Engineer</h1>
              <h1 className="text-6xl">Designer</h1>
              <h1 className="text-5xl">Freelancer</h1>
            </div>
          </div>
        </div>
      </div> */}
      <footer className="footer">
        <span>Footer</span>
      </footer>
    </main>
  );
}
