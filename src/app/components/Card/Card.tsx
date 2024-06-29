import { useGSAP } from "@gsap/react";
import { Card } from "@nextui-org/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

const CardWithTextFullWidth = ({ id }: { id: string }) => {
  const comp = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const t1 = gsap.timeline();
    t1.from([`#${id}-1`, `#${id}-2`, `#${id}-3`], {
      xPercent: "-100",
      duration: 0.6,
      delay: 0.3,
      opacity: 0,
      stagger: 0.4,
      scrollTrigger: {
        trigger: [`#${id}-1`],
        markers: true,
      },
    }).to([`${id}-1`, `${id}-2`, `${id}-3`], {
      xPercent: "0",
      duration: 0.6,
      delay: 0.3,
      opacity: 1,
      stagger: 0.4,
      scrollTrigger: {
        trigger: [`#${id}-1`],
      },
    });
  }, []);
  return (
    <Card className="w-full rounded-none flex-row gap-2">
      <div id={`${id}-1`} className="h-52 w-full border-2">
        1
      </div>
      <div id={`${id}-2`} className="h-52 w-full border-2">
        1
      </div>
      <div id={`${id}-3`} className="h-52 w-full border-2">
        1
      </div>
    </Card>
  );
};

export default CardWithTextFullWidth;
