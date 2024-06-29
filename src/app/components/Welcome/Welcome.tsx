import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  Image,
  Slider,
} from "@nextui-org/react";
import SliderCustom from "../ui/Slider/EmblaCarousel";
import { useGSAP } from "@gsap/react";
import CardWithTextFullWidth from "../Card/Card";

const Welcome = () => {
  const comp = useRef(null);

  useGSAP(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 0.6,
        delay: 0.3,
      })
        .from(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        })
        .to(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          stagger: 0.5,
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 0.6,
        })

        .from(["#card-1", "#card-2", "#card-3"], {
          opacity: 0,

          duration: 0.5,
          ease: "power2.out",
          stagger: { from: "start", amount: 0.1 },
        })
        .to(["#card-1", "#card-2", "#card-3"], {
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
          stagger: { from: "start", amount: 0.1 },
        });
    }, comp);

    return () => ctx.revert();
  }, []);
  return (
    <div className="relative h-screen w-full" ref={comp}>
      <div
        id="intro-slider"
        className=" p-10 bg-gray-50 absolute top-0 left-0 font-spaceGrotesk z-10 w-full flex flex-col gap-10 tracking-tight"
      >
        <h1 className="text-9xl" id="title-1">
          Software Engineer
        </h1>
        <h1 className="text-9xl" id="title-2">
          Designer
        </h1>
        <h1 className="text-9xl" id="title-3">
          Freelancer
        </h1>
      </div>
      <div className="flex flex-row content-container">
        {[
          { id: 1, position: "top-[-50px]" },
          { id: 2, position: "top-[50px]" },
          { id: 3, position: "top-[-50px]" },
        ].map((i) => (
          <CardW key={i.id} id={i.id} position={i.position} />
        ))}
      </div>
    </div>
  );
};

export default Welcome;

const CardW = ({ id, position }: { id: number; position: string }) => {
  const slide1 = (
    <Image
      removeWrapper
      alt="Card example background"
      className="z-0 w-full h-full   object-cover  hover:scale-105 transition-all rounded-none"
      src="https://nextui.org/images/card-example-6.jpeg"
    />
  );
  const slides = [slide1, slide1];
  return (
    <Card
      id={`card-${id}`}
      className="h-full  flex bg-gray-950 justify-center place-items-center w-full rounded-none  relative  "
      isFooterBlurred
    >
      <CardHeader className="absolute z-[1] top-1 flex-col items-start ">
        <p className="text-tiny text-black uppercase font-bold">New</p>
        <div className="text-black font-medium text-2xl  absolute top-9">
          Acme camera
        </div>
      </CardHeader>
      <SliderCustom
        delay={3000}
        slides={slides}
        options={{ loop: true }}
        slideStyle=""
      ></SliderCustom>

      <CardFooter className="absolute bg-white/30 bottom-0  border-zinc-100/50 z-0 justify-between rounded-none">
        <div>
          <p className="text-black text-tiny">Available soon.</p>
          <p className="text-black text-tiny">Get notified.</p>
        </div>
        <Button className="text-tiny" color="primary" radius="full" size="sm">
          Notify Me
        </Button>
      </CardFooter>
    </Card>
  );
};
