import { Card, CardHeader, CardFooter, Button } from "@nextui-org/react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import SliderCustom from "../ui/Slider/EmblaCarousel";

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
    <Link href={url}>
      <Card
        id={`card-${id}`}
        className="h-full  flex bg-gray-950 justify-center place-items-center w-full rounded-none  relative  "
        isFooterBlurred
      >
        <CardHeader className="absolute z-[1] top-1 flex-col items-start ">
          <p className="text-tiny text-black uppercase font-bold">New</p>
          <div className="text-black font-medium text-2xl  absolute top-9">
            Acme camera
          </div>
        </CardHeader>
        <SliderCustom
          delay={3000}
          slides={slides}
          options={{ loop: true }}
          slideStyle=""
        ></SliderCustom>

        <CardFooter className="absolute bg-white/30 bottom-0  border-zinc-100/50 z-0 justify-between rounded-none">
          <div>
            <p className="text-black text-tiny">Available soon.</p>
            <p className="text-black text-tiny">Get notified.</p>
          </div>
          <Button className="text-tiny" color="primary" radius="full" size="sm">
            Notify Me
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default WelcomeCard;
