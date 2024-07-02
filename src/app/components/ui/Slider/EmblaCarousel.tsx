import React, { useCallback, useEffect, useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "@/app/styles/slider.css";
type PropType = {
  slides?: any[];
  options?: EmblaOptionsType;
  delay: number;
  children?: React.ReactNode;
  slideStyle?: string;
  playOnInit?: boolean;
};

const SliderCustom: React.FC<PropType> = (props) => {
  const {
    slides,
    options,
    children,
    slideStyle,
    playOnInit = false,
    delay = 2000,
  } = props;

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({
      playOnInit,
      delay,
      stopOnMouseEnter: true,
      stopOnInteraction: false,
    }),
  ]);
  emblaApi?.on;

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla h-full w-full">
      <div className="embla__viewport h-full" ref={emblaRef}>
        <div className="embla__container h-full">
          {children
            ? children
            : slides?.map((slide) => (
                <div className="embla__slide h-full" key={slide}>
                  <div className={`${slideStyle} h-full`}>
                    {children ? children : slide}
                  </div>
                </div>
              ))}
        </div>
      </div>
      <button
        className="embla__prev absolute left-0 top-1/2"
        onClick={scrollPrev}
      >
        Prev
      </button>
      <button
        className="embla__next right-0 top-1/2 absolute"
        onClick={scrollNext}
      >
        Next
      </button>
      {/* <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton
            onClick={() => onButtonAutoplayClick(onPrevButtonClick)}
            disabled={prevBtnDisabled}
          />
          <NextButton
            onClick={() => onButtonAutoplayClick(onNextButtonClick)}
            disabled={nextBtnDisabled}
          />
        </div>

        <button className="embla__play" onClick={toggleAutoplay} type="button">
          {isPlaying ? "Stop" : "Start"}
        </button>
      </div> */}
    </div>
  );
};

export default SliderCustom;
