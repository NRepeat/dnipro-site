import React, { useCallback } from "react";
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
    playOnInit,
    delay = 2000,
  } = props;

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit, delay }),
  ]);
  emblaApi?.on;

  // const [isPlaying, setIsPlaying] = useState(true);

  // const {
  //   prevBtnDisabled,
  //   nextBtnDisabled,
  //   onPrevButtonClick,
  //   onNextButtonClick,
  // } = usePrevNextButtons(emblaApi);

  // const onButtonAutoplayClick = useCallback(
  //   (callback: () => void) => {
  //     const autoplay = emblaApi?.plugins()?.autoplay;
  //     if (!autoplay) return;

  //     const resetOrStop =
  //       autoplay.options.stopOnInteraction === false
  //         ? autoplay.reset
  //         : autoplay.stop;

  //     resetOrStop();
  //     callback();
  //   },
  //   [emblaApi]
  // );

  // const toggleAutoplay = useCallback(() => {
  //   const autoplay = emblaApi?.plugins()?.autoplay;
  //   if (!autoplay) return;

  //   const playOrStop = autoplay.isPlaying() ? autoplay.stop : autoplay.play;
  //   playOrStop();
  // }, [emblaApi]);

  // useEffect(() => {
  //   const autoplay = emblaApi?.plugins()?.autoplay;
  //   if (!autoplay) return;

  //   setIsPlaying(autoplay.isPlaying());
  //   emblaApi
  //     .on("autoplay:play", () => setIsPlaying(true))
  //     .on("autoplay:stop", () => setIsPlaying(false))
  //     .on("reInit", () => setIsPlaying(autoplay.isPlaying()));
  // }, [emblaApi]);
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return (
    <div className="embla h-full">
      <div className="embla__viewport h-full" ref={emblaRef}>
        <div className="embla__container h-full">
          {slides?.map((slide) => (
            <div className="embla__slide h-full" key={slide}>
              <div className={`${slideStyle} h-full`}>{slide}</div>
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
