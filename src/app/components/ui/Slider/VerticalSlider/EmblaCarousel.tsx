"use client";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import "@/app/styles/verticalSlider.css";

type VerticalSliderPropType = {
  slides?: any[];
  options?: EmblaOptionsType;
  delay?: number;
  children?: React.ReactNode;
  slideStyle?: string;
  playOnInit?: boolean;
};

const EmblaCarousel: React.FC<VerticalSliderPropType> = (props) => {
  const { slides, options, children, slideStyle } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);
  console.log("🚀 ~ nextBtnDisabled:", nextBtnDisabled);

  return (
    <section className="embla relative">
      {!prevBtnDisabled && (
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      )}

      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {children
            ? children
            : slides?.map((slide) => (
                <div className="embla__slide " key={slide}>
                  <div className={`${slideStyle} max-w-[100px]`}>
                    {children ? children : slide}
                  </div>
                </div>
              ))}
        </div>
      </div>
      {!nextBtnDisabled && (
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      )}

      <div className="embla__controls">
        <div className="embla__buttons"></div>

        {/* <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default EmblaCarousel;
