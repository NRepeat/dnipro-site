import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ClientOnly } from "remix-utils/client-only";
import Video from "./Video.client";
import { Link } from "@remix-run/react";

const HeroTitle = () => {
  useGSAP(() => {
    gsap.to("#cta-hero-button", { opacity: 1, delay: 1.5, y: -50 });
  }, []);

  return (
    <section className="w-full ">
      <div className="relative">
        <div className="flex-col flex-center">
          {/* <p className="hero-title" id="hero-title">
            Shop Dnipro
          </p> */}
          <ClientOnly>{() => <Video />}</ClientOnly>
        </div>
        <div
          id="cta-hero-button"
          className="right-1/2 translate-x-1/2  opacity-0  translate-y-20 absolute bottom-0 min-w-[200px]"
        >
          <Link id="highligh" to={"/"} className="btn">
            Go to new collection
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroTitle;
