import { handleFormAction } from "@/app/data/collection";
import PriceRange from "./PriceRange";
import { Size } from "./Size";
import Brand from "./Brand";

const Filter = ({ pathname, sex }: { pathname: string; sex: string }) => {
  return (
    <div>
      <form action={(formData) => handleFormAction(formData)}>
        <input type="text" name="name" />
        <input type="hidden" name="pathname" value={pathname} />
        <button>Submit</button>
      </form>
      <PriceRange />
      <Size sex={sex} />
      <Brand />
    </div>
  );
};

export default Filter;
