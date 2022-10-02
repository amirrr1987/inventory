import { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";

const Auth = () => {
  const [visibility, setVisibility] = useState(false);
  const openModal = () => {
    setVisibility(true);
  };
  const closeModal = () => {
    setVisibility(false);
  };
  return (
    <div>
      <Button
        type="text"
        className="px-3 rounded text-light-500"
        onClick={openModal}
      >
        Register / Login
      </Button>
      <Modal
        visibility={visibility}
        closeModal={closeModal}
        footer={
          <div className="flex justify-between">
            <div>
              <Button>Send</Button>
            </div>
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
    </div>
  );
};
export default Auth;
