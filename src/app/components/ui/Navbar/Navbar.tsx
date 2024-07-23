import BagModal from "../../Bag/BagModal";
import NavbarCustomContent from "./NavbarContent";
const NavBar = () => {
  return (
    <div className="main-tool-bar  w-full  ">
      <NavbarCustomContent />
      <BagModal />
    </div>
  );
};

export default NavBar;
