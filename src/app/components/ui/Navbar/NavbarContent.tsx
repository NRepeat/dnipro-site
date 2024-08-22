import Link from "next/link";
import { IoBag } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { RiAccountBoxFill } from "react-icons/ri";
import NavButtonWithDropdownMenuWrapper from "./DropdownMenu";
import { Input } from "@/components/ui/input";
import SearchInput from "../SearchInput/SearchInput";
import CartButton from "../../CartButton/CartButton";
import CartDriver from "../../CartDriver/CartDriver";

const NavbarCustomContent = () => {
  return (
    <div className="text-black  max-navbar-w-disable w-full flex items-center justify-between px-4 ">
      <div className="w-1/3 flex">
        <Link
          href="/"
          className="text-xl text-left w-full pl-2 hover:underline"
        >
          NNSHOP
        </Link>
      </div>
      <NavButtonWithDropdownMenuWrapper />
      <div className="w-1/3 flex gap-6 justify-end">
        <SearchInput />
        <div className="flex gap-4">
          <Link href={"/account"} className="flex justify-center items-center">
            <RiAccountBoxFill className="w-5 h-5" />
          </Link>
          <Link href={"/favorite"} className="flex justify-center items-center">
            <MdFavoriteBorder className="w-5 h-5" />
          </Link>
          <CartDriver>
            <CartButton />
          </CartDriver>
        </div>
      </div>
    </div>
  );
};

export default NavbarCustomContent;
