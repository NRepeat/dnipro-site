"use client";
import images from "@/app/utils/assets/images";

import WelcomeCard from "./WelcomeCard";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Welcome = () => {
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
  const { image10, image12, image11, image9, image6 } = images.models;
  return (
    <div className="relative h-screen w-full" ref={comp}>
      <div className="flex flex-row content-container">
        {[
          {
            id: 1,
            image: [image10, image6],
            url: "/collections/women/clothes",
          },
          {
            id: 2,
            image: [image9, image12],
            url: "/collections/women/clothes",
          },
          {
            id: 3,
            image: [image12, image11],
            url: "/collections/women/clothes",
          },
        ].map((i) => (
          <WelcomeCard key={i.id} id={i.id} image={i.image} url={i.url} />
        ))}
      </div>
    </div>
  );
};

export default Welcome;
