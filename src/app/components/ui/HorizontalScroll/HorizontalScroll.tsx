import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import images from "@/app/utils/assets/images";
import { Button } from "@nextui-org/react";

function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      {
        /* A return function for killing the animation on component unmount */
      }
      pin.kill();
    };
  }, []);
  const { image1 } = images;
  return (
    <section className="overflow-hidden">
      {/* The section up act just as a wrapper. If the trigger (below) is the
      first jsx element in the component, you get an error on route change */}

      {/* The div below act just as a trigger. As the doc suggests, the trigger and 
      the animation should alway be two separated refs */}
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <div className="scroll-section ">
            <div className="w-full flex justify-start">
              <div className="w-1/3">
                <Image
                  src={image1}
                  alt="image1"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="w-10/12 pl-8 flex flex-col justify-evenly">
                <div className="">
                  <h1 className="text-9xl">Software Engineer</h1>
                  <h1 className="text-9xl">Designer</h1>
                  <h1 className="text-9xl">Freelancer</h1>
                </div>
                <Button
                  className="w-1/2 h-20 backdrop-blur-lg opacity-95"
                  radius="sm"
                  variant="ghost"
                  color="primary"
                >
                  <p className="text-2xl font-thin">Discover more</p>
                </Button>
              </div>
            </div>
          </div>
          <div className="scroll-section">
            <div className="w-full flex justify-start">
              <div className="w-1/3">
                <Image
                  src={image1}
                  alt="image1"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="w-10/12 pl-8 flex flex-col justify-evenly">
                <div className="">
                  <h1 className="text-9xl">Software Engineer</h1>
                  <h1 className="text-9xl">Designer</h1>
                  <h1 className="text-9xl">Freelancer</h1>
                </div>
                <Button
                  className="w-1/2 h-20 backdrop-blur-lg opacity-95"
                  radius="sm"
                  variant="ghost"
                  color="primary"
                >
                  <p className="text-2xl font-thin">Discover more</p>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
