import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { smallHeroVideo, heroVideo } from "~/utils";

const Video = () => {
  const [video, setVideo] = useState<string>();
  const [innerWidth, setInnerWidth] = useState<number>(
    window.innerWidth < 660 ? 660 : 1200
  );
  useGSAP(() => {
    gsap.to("#new-collection", { opacity: 1, delay: 1.5 });
  }, []);
  const updateVideoSource = () => {
    setInnerWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateVideoSource);

    return () => {
      window.removeEventListener("resize", updateVideoSource);
    };
  }, []);
  useEffect(() => {
    if (innerWidth < 769) {
      setVideo(smallHeroVideo);
    } else {
      setVideo(heroVideo);
    }
  }, [innerWidth]);
  return (
    <div className="md:w-full flex flex-center w-full">
      <div
        id="new-collection"
        className=" flex flex-col flex-center absolute text-gray-100 translate-x-1/2 right-1/2 sm:top-40 md:top-14 lg:top-36 top-10 opacity-0 gap-2"
      >
        <div className="inline-flex sm:text-3xl  text-2xl gap-2 font-bold uppercase ">
          <p>Armani</p>
          <p>Prada</p>
          <p>Primiata</p>
        </div>
        <p className="text-xl">New summer collection</p>
        <p className="text-xl">SS 2024</p>
      </div>

      {video && (
        <video
          className="pointer-events-none md:w-full w-[100%]"
          key={video}
          autoPlay
          muted
          loop
          playsInline={true}
        >
          <source src={video} />
        </video>
      )}
    </div>
  );
};

export default Video;
