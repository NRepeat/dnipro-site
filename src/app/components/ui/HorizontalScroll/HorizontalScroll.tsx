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
        translateX: "-150vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "1000 top",
          scrub: 0.2,
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
  const { image1, image2, image3, image5 } = images;
  return (
    <section className="overflow-hidden">
      {/* The section up act just as a wrapper. If the trigger (below) is the
      first jsx element in the component, you get an error on route change */}

      {/* The div below act just as a trigger. As the doc suggests, the trigger and 
      the animation should alway be two separated refs */}
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <div className="scroll-section flex justify-center ">
            <div className="w-full flex justify-center flex-col  relative items-center">
              <div className="w-full">
                <Image
                  src={image1}
                  alt="image1"
                  className="w-1/3  h-auto object-cover"
                />
              </div>
              <div className="w-10/12 pl-8 flex flex-col justify-evenly">
                <div className="absolute text-white top-44 right-[100px]">
                  <h1 className="text-9xl">Software Engineer</h1>
                  <h1 className="text-9xl">Designer</h1>
                  <h1 className="text-9xl">Freelancer</h1>
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
          <div className="scroll-section bg-black flex justify-center ">
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
