import Buttons from "./Buttons";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const NavButtonWithDropdownMenuWrapper = () => {
  return (
    <NavigationMenu className="w-1/3">
      <NavigationMenuList className="gap-2">
        <Buttons />
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavButtonWithDropdownMenuWrapper;
