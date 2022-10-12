import { useContext, useState } from "react";
import ListContext from "../contexts/ListContext";
import Button from "./Button";
import Modal from "./Modal";

const Auth = () => {
  const [visibility, setVisibility] = useState(false);
  const { getToken, token } = useContext(ListContext);
  const openModal = () => {
    setVisibility(true);
  };
  const closeModal = () => {
    setVisibility(false);
  };
  const [user, setUser] = useState({ username: "", password: "" });
  const submitHandler = async () => {
    try {
      await getToken(user);
    } catch (error) {
      console.log(error);
    }
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
              <Button onClick={submitHandler}>Send</Button>
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
            name="name"
            className="border border-gray-300 focus:outline-gray-400 w-full p-1"
            onInput={(event: any) =>
              setUser({ ...user, username: event.target.value })
            }
          />
        </div>

        <div>
          <label htmlFor="password" className="capitalize mb-1 block">
            password:
          </label>
          <input
            name="password"
            type="password"
            className="border border-gray-300 focus:outline-gray-400 w-full p-1"
            onInput={(event: any) =>
              setUser({ ...user, password: event.target.value })
            }
          />
        </div>
      </Modal>
    </div>
  );
};
export default Auth;
