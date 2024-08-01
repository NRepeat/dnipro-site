"use client";
import React, { useCallback, useEffect, useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "@/app/styles/slider.css";
type SliderPropType = {
  slides?: any[];
  options?: EmblaOptionsType;
  delay?: number;
  children?: React.ReactNode;
  slideStyle?: string;
  playOnInit?: boolean;
  autoPlay?: boolean;
  selectedSlide?: number;
};

const SliderCustom: React.FC<SliderPropType> = (props) => {
  const {
    slides,
    options,
    children,
    slideStyle,
    playOnInit = false,
    delay,
    selectedSlide,
    autoPlay,
  } = props;

  const [emblaRef, emblaApi] = useEmblaCarousel(
    options,
    autoPlay
      ? [
          Autoplay({
            playOnInit,
            delay,
            stopOnMouseEnter: true,
            stopOnInteraction: false,
          }),
        ]
      : []
  );
  emblaApi?.on;

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (selectedSlide) {
      emblaApi?.scrollTo(selectedSlide);
    }
  }, [selectedSlide, emblaApi]);
  return (
    <>
      {slides && slides?.length > 1 ? (
        <div className="embla h-full w-full relative">
          <div className="embla__viewport h-full" ref={emblaRef}>
            <div className="embla__container h-full">
              {children ? (
                <div className="embla__slide h-full">{children}</div>
              ) : (
                slides?.map((slide, i) => (
                  <div
                    className="embla__slide h-full flex justify-center"
                    key={i + "slide"}
                  >
                    <div
                      className={`${slideStyle}  flex w-full justify-center`}
                    >
                      {children ? children : slide}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
          <div>
            {slides && slides?.length >= 2 && (
              <>
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
              </>
            )}
          </div>
        </div>
      ) : (
        <div className="flex w-full justify-center">{slides}</div>
      )}
    </>
  );
};

export default SliderCustom;
