import Link from "next/link";
import { navBardData } from "./data";
import {
  NavigationMenuItem,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { NavigationMenuContent } from "@radix-ui/react-navigation-menu";
import DropdownContent from "./DropdownContent";

const Buttons = () => {
  const navMenu = navBardData.pages.map((page, i) => (
    <NavigationMenuItem key={i}>
      <NavigationMenuTrigger>
        <Link
          href={page.link}
          key={page.slug}
          data-key={page.slug}
          className={`border-b-4 font-thin text-lg h-full w-full flex justify-center items-center  
          }`}
        >
          <p>{page.label}</p>
        </Link>
      </NavigationMenuTrigger>
      <DropdownContent pageSlug={page.slug} />
    </NavigationMenuItem>
  ));
  return navMenu;
};

export default Buttons;
