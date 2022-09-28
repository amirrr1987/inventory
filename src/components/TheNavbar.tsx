import { useState } from "react";
import Auth from "./Auth";
import Button from "./Button";
import Container from "./container";
import Modal from "./Modal";
import NavItem from "./NavItem";
import SearchBtn from "./SearchBtn";

const TheNavbar = () => {
  const [visibility, setVisibility] = useState(false);
  const openModal = () => {
    setVisibility(true);
  };
  const closeModal = () => {
    setVisibility(false);
  };
  return (
    <nav className="bg-blue-500 py-4 border-b">
      <Container>
        <div className="flex justify-between">
          <ul className="flex gap-x-4">
            <NavItem to="/">home</NavItem>
            <NavItem to="/about">about</NavItem>
            <NavItem to="/gallrey">gallrey</NavItem>
            <NavItem to="/contact">contact</NavItem>
          </ul>
          <div className="flex items-center gap-x-4">
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
        </div>
      </Container>
    </nav>
  );
};
export default TheNavbar;
