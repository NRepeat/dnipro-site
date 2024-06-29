import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Button, Card, CardFooter, CardHeader } from "@nextui-org/react";
import SliderCustom from "../ui/Slider/EmblaCarousel";
import images from "@/app/utils/assets/images";
import Image, { StaticImageData } from "next/image";

const Welcome = () => {
  const { image10, image12, image11, image9 } = images;
  return (
    <div className="relative h-screen w-full">
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
          { id: 1, image: image10 },
          { id: 2, image: image9 },
          { id: 3, image: image12 },
        ].map((i) => (
          <CardW key={i.id} id={i.id} image={i.image} />
        ))}
      </div>
    </div>
  );
};

export default Welcome;

const CardW = ({ id, image }: { id: number; image: StaticImageData }) => {
  const slide1 = (
    <Image
      alt="Card example background"
      className="z-0 w-full h-full   object-cover  hover:scale-105 transition-all rounded-none"
      src={image}
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
