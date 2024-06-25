import Categories from "../Categories/Categories";
import HeroTitle from "../HeroTitle/HeroTitle";

const Landing = () => {
  return (
    <div className="screen-max-width">
      <HeroTitle />

      <Categories />
    </div>
  );
};

export default Landing;
