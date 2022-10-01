import { Icon } from "@iconify/react";
import { useState } from "react";
import Auth from "./Auth";
import Button from "./Button";
import Container from "./container";
import Modal from "./Modal";
import NavItem from "./NavItem";
import SearchBtn from "./SearchBtn";
import "./TheNavbar.css";
const TheNavbar = () => {
  const [visibility, setVisibility] = useState(false);
  const openModal = () => {
    setVisibility(true);
  };
  const closeModal = () => {
    setVisibility(false);
  };
  const [drawerVisibility, setDrawerVisibility] = useState(false);
  const openDrawer = () => {
    setDrawerVisibility(!drawerVisibility);
  };
  return (
    <nav className="bg-blue-500 py-4 border-b drawer z-40">
      <Container>
        <div className="flex justify-between items-center">
          <img
            className="rounded-full w-10 h-10"
            src="https://picsum.photos/id/567/35/35"
            alt=""
          />
          <ul className="flex gap-x-4 hidden">
            <NavItem to="/">home</NavItem>
            <NavItem to="/list">list</NavItem>
            <NavItem to="/add">add</NavItem>
          </ul>
          <div className="flex items-center gap-x-4 hidden">
            <Auth openModal={openModal} />
            <Modal
              visibility={visibility}
              closeModal={closeModal}
              footer={
                <div className="flex justify-between">
                  <div>
                    <Button>Send</Button>
                  </div>
                  <div></div>
                  <div></div>
                </div>
              }
            >
              <div className="mb-4">
                <label htmlFor="name" className="capitalize mb-1 block">
                  name:
                </label>
                <input
                  type="text"
                  className="border border-gray-300 focus:outline-gray-400 w-full p-1"
                />
              </div>

              <div>
                <label htmlFor="name" className="capitalize mb-1 block">
                  name:
                </label>
                <input
                  type="text"
                  className="border border-gray-300 focus:outline-gray-400 w-full p-1"
                />
              </div>
            </Modal>
            <SearchBtn />
          </div>

          <button
            className="text-white w-8 h-8 rounded text-xl lg:hidden"
            onClick={openDrawer}
          >
            <Icon icon="charm:menu-hamburger" />
          </button>
          <div
            className={`bg-blue-50 h-screen inset-y-0 left-0 z-50 fixed duration-1000 w-60 shadow lg:hidden p-4 ${
              drawerVisibility ? "drawer-close" : "drawer-open"
            }`}
          >
            <img
              className="rounded w-full h-30"
              src="https://picsum.photos/id/567/300/100"
              alt=""
            />
            <div className="p-4">
              <div>title</div>
              <div>title</div>
              <div>title</div>
              <div>title</div>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};
export default TheNavbar;
function setClass(arg0: string) {
  throw new Error("Function not implemented.");
}
