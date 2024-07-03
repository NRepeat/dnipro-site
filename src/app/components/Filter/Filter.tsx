import { handleFormAction } from "@/app/data/collection";
import PriceRange from "./PriceRange";

const Filter = ({ pathname }: { pathname: string }) => {
  return (
    <div>
      <form action={(formData) => handleFormAction(formData)}>
        <input type="text" name="name" />
        <input type="hidden" name="pathname" value={pathname} />
        <button>Submit</button>
      </form>
      <PriceRange />
    </div>
  );
};

export default Filter;
