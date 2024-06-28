import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { CategoryCard } from "~/types/types";
import { Link, useNavigate } from "@remix-run/react";
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "./EmblaCarousel";
const CardC = ({ categoriesData }: { categoriesData: CategoryCard }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(categoriesData.url ? categoriesData.url : "/");
  };

  const OPTIONS: EmblaOptionsType = {};
  const SLIDES = categoriesData.image;
  return (
    <Card
      isFooterBlurred
      className={`w-full rounded-none ${categoriesData.gridColumnPosition} ${categoriesData.gridRowPosition} cursor-pointer`}
    >
      <CardHeader className="absolute rounded-none z-10 top-1 flex-col items-start">
        {categoriesData.subtitle && (
          <p className="text-tiny text-white/60 uppercase font-bold">
            {categoriesData.subtitle}
          </p>
        )}
        <h4 className="text-white/90 font-medium text-xl">
          {categoriesData.name}
        </h4>
      </CardHeader>
      {categoriesData.image.length >= 2 ? (
        <EmblaCarousel slides={SLIDES} options={OPTIONS} delay={} />
      ) : (
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full rounded-none   object-cover hover:scale-105"
          src={categoriesData.image[0]}
        />
      )}
      {/* {categoriesData.image.map((c) => {
          return (
            <Image
              ref={customerLogo}
              key={c}
              removeWrapper
              alt="Relaxing app background"
              className="z-0 w-full h-full rounded-none   object-cover hover:scale-105"
              src={c}
            />
          );
        })} */}
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100 rounded-none">
        <div className="flex flex-grow gap-2 items-center">
          {categoriesData.icon && (
            <Image
              alt="Breathing app icon"
              className="rounded-full w-10 h-11 bg-black"
              src={categoriesData.icon}
            />
          )}
          {categoriesData.footer && (
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">{categoriesData.footer}</p>
            </div>
          )}
        </div>
        {categoriesData.button ? (
          <Button radius="full" size="sm" onClick={() => handleNavigate()}>
            Get App
          </Button>
        ) : (
          <Link
            className="text-white hover:text-secondary transition-all pr-4 "
            to={categoriesData.url ? categoriesData.url : "/"}
          >
            discover more
          </Link>
        )}
      </CardFooter>
    </Card>
  );
};

export default CardC;
