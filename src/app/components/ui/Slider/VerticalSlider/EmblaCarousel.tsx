"use client";
import "@/app/styles/verticalSlider.css";

import React, { useState, useEffect, useCallback } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { Thumb } from "./EmblaCarouselThumbsButton";
import { NextButton, PrevButton } from "./EmblaCarouselArrowButtons";
import { usePrevNextButtons } from "../Buttons";

type VerticalSliderPropType = {
  slides?: any[];
  options?: EmblaOptionsType;
  delay?: number;
  children?: React.ReactNode;
  slideStyle?: string;
  playOnInit?: boolean;
};

const EmblaCarousel: React.FC<VerticalSliderPropType> = (props) => {
  const { slides, options } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
    axis: "y",
  });
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaThumbsApi);
  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();

    emblaMainApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div className="embla flex ">
      <div className="embla-thumbs relative">
        {!prevBtnDisabled && (
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        )}
        {!nextBtnDisabled && (
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        )}
        <div className="embla-thumbs__viewport " ref={emblaThumbsRef}>
          <div className="embla-thumbs__container ">
            {slides?.map((slide, index) => (
              <Thumb
                key={index}
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                index={index}
                image={slide}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="embla__viewport" ref={emblaMainRef}>
        <div className="embla__container ">
          {slides?.map((slide, index) => (
            <div className="embla__slide " key={index}>
              {slide}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
