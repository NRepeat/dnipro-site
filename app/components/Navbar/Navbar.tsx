import { navLists } from "~/constant";
import { appleImg, bagImg, searchImg } from "~/utils";

const Navbar = () => {
  return (
    <header className="bg-navBg w-full flex justify-between py-5 px-2 sm:px-10 items-center text-white">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="appleImg" width={25} height={25} />
        <div className="flex flex-1 justify-center max-sm:hidden gap-2 items-center">
          {navLists.map((item) => (
            <div
              className=" cursor-pointer text-sm text-gr hover:text-secondary text-liteGray h-min transition-all"
              key={item}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="flex items-baseline gap-4 max-sm:justify-end max-sm:flex-1">
          <img
            className=""
            src={searchImg}
            alt="searchImg"
            width={25}
            height={25}
          />
          <img className="" src={bagImg} alt="bagImg" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
