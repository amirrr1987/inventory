import { Icon } from "@iconify/react";
import { useState } from "react";
import Auth from "./Auth";
import Button from "./Button";
import Container from "./Container";
import DrawerMenu from "./DrawerMenu";
import Logo from "./Logo";
import NavItem from "./NavItem";
import SearchBtn from "./SearchBtn";
import "./TheNavbar.css";
const TheNavbar = () => {
  return (
    <nav className="bg-blue-500 py-4 border-b drawer z-40">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-x-12">
            <Logo className="h-8 h-8" />
            <ul className="lg:gap-x-4 hidden lg:flex">
              <NavItem to="/">home</NavItem>
              <NavItem to="/list">list</NavItem>
              <NavItem to="/add">add</NavItem>
            </ul>
          </div>

          <DrawerMenu />

          <div className="lg:flex lg:items-center lg:gap-x-4 hidden">
            <Auth />
            <SearchBtn />
          </div>
        </div>
      </Container>
    </nav>
  );
};
export default TheNavbar;
