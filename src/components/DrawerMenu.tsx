import { Icon } from "@iconify/react";
import { Fragment, useState } from "react";
import Logo from "./Logo";
import NavItem from "./NavItem";

const DrawerMenu = () => {
  const [drawerVisibility, setDrawerVisibility] = useState(false);
  const openDrawer = () => {
    setDrawerVisibility(!drawerVisibility);
  };
  return (
    <Fragment>
      <button
        className="text-white w-8 h-8 rounded text-xl lg:hidden"
        onClick={openDrawer}
      >
        <Icon icon="charm:menu-hamburger" />
      </button>
      <div
        className={`bg-blue-400 h-screen inset-y-0 left-0 z-50 fixed duration-1000 w-60 shadow lg:hidden p-4 ${
          drawerVisibility ? "drawer-close" : "drawer-open"
        }`}
      >
        <div className="flex flex-col items-center gap-12">
          <Logo className="h-20" />
          <ul className="flex flex-col gap-4">
            <NavItem to="/">home</NavItem>
            <NavItem to="/list">list</NavItem>
            <NavItem to="/add">add</NavItem>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default DrawerMenu;
