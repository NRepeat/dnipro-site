import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import images from "@/app/utils/assets/images";
import { Button } from "@nextui-org/react";
import image from "@/app/utils/assets/images";

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
  const { image1, image2, image3, image5 } = image.models;
  return (
    <section className="overflow-hidden">
      {/* The section up act just as a wrapper. If the trigger (below) is the
      first jsx element in the component, you get an error on route change */}

      {/* The div below act just as a trigger. As the doc suggests, the trigger and 
      the animation should alway be two separated refs */}
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <div className=" flex justify-center   relative items-center">
            <Image
              src={image1}
              alt="image1"
              className="w-1/3  h-auto object-cover"
            />

            <div className="w-10/12 pl-8 flex flex-col justify-evenly">
              <div className=" text-white top-44 right-[100px]">
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
          <footer className="footer">
            <span>Section</span>
          </footer>
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
