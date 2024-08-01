import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import SliderCustom from "../ui/Slider/EmblaCarousel";
import { Button } from "@/components/ui/button";

const WelcomeCard = ({
  id,
  image,
  url,
}: {
  id: number;
  image: StaticImageData[];
  url: string;
}) => {
  const slides = image.map((imag, i) => (
    <Image
      key={i}
      alt="Card example background"
      className="z-0 w-full h-full   object-cover  hover:scale-105 transition-all rounded-none"
      src={imag}
    />
  ));

  return (
    <Link href={url} prefetch>
      <div
        id={`card-${id}`}
        className="h-full  flex bg-gray-950 justify-center place-items-center w-full rounded-none  relative  "
      >
        <div className="absolute z-[1] top-1 flex-col w-full ">
          <p className="text-2xl text-white text-left pl-4">PRODUCT</p>
        </div>
        <SliderCustom
          delay={3000}
          slides={slides}
          options={{ loop: true }}
          slideStyle=""
          autoPlay={true}
        ></SliderCustom>

        <div className="absolute bg-white/30 bottom-0  border-zinc-100/50 z-0 justify-between rounded-none backdrop-blur-sm w-full flex items-center px-4 py-2">
          <div>
            <p className="text-black text-tiny">Available soon.</p>
          </div>
          <Button className="text-tiny" variant={"outline"} size="sm">
            Notify Me
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default WelcomeCard;
