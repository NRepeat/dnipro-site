import BagModal from "../../Bag/BagModal";
import BuyRightNowModal from "../../Bag/BuyRightNowModal";
import NavbarCustomContent from "./NavbarContent";
const NavBar = () => {
  return (
    <div className="main-tool-bar  w-full  ">
      <NavbarCustomContent />
      <BagModal />
      <BuyRightNowModal />
    </div>
  );
};

export default NavBar;
