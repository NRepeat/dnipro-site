import Welcome from "./components/Welcome/Welcome";

import CardGrid from "./components/ui/CardGrid/CardGrid";
import image from "./utils/assets/images";
import CustomCard from "./components/ui/Card/Card";
import SliderCustom from "./components/ui/Slider/EmblaCarousel";
import BrandSlide from "./components/BrandSlide/BrandSlide";
export default function Home() {
  return (
    <main className="bg-gradient-to-r h-full from-slate-300 to-slate-500 flex flex-col">
      <Welcome />
      {/* <ScrollSection /> */}
      <SliderCustom delay={5000} options={{ loop: true }} playOnInit>
        <BrandSlide />
        <BrandSlide />
      </SliderCustom>
    </main>
  );
}
