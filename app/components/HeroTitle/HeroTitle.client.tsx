import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useEffect, useState } from "react";
import { heroVideo, smallHeroVideo } from "~/utils";

const HeroTitle = () => {
  const [video, setVideo] = useState<string>();
  console.log("🚀 ~ HeroTitle ~ video:", video);

  useGSAP(() => {
    gsap.to("#hero-title", { opacity: 1, delay: 1.5 });
  }, []);

  const updateVideoSource = () => {
    setInnerWidth(window.innerWidth);
  };
  const [innerWidth, setInnerWidth] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", updateVideoSource);

    return () => {
      window.removeEventListener("resize", updateVideoSource);
    };
  }, []);
  useEffect(() => {
    if (innerWidth < 760) {
      setVideo(smallHeroVideo);
    } else {
      setVideo(heroVideo);
    }
  }, [innerWidth]);

  return (
    <section className="w-full nav-height relative">
      <div className="flex-col flex-center h-5/6">
        <p className="hero-title" id="hero-title">
          Shop Dnipro
        </p>
        <div className="md:w-10/12 w-9/12">
          {video && (
            <video autoPlay muted loop>
              <source src={video} />
            </video>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroTitle;
