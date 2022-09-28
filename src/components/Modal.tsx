import { Icon } from "@iconify/react";
import { Fragment } from "react";
import Button from "./Button";

const Modal = (props: any) => {
  return (
    <Fragment>
      <div
        className="fixed w-196 h-96 m-auto inset-0 bg-white rounded p-4 z-50 duration-300 shadow-lg border grid grid-rows-[max-content,1fr,max-content]"
        style={{ transform: props.visibility ? "scale(1)" : "scale(0)" }}
      >
        <div>
          <Button type="icon" circle color="red" onClick={props.closeModal}>
            <Icon icon="icon-park-outline:close" />
          </Button>
        </div>
        <div className="p-4">{props.children}</div>
        <div>{props.footer}</div>
      </div>
      <div
        className="fixed w-screen h-screen inset-0 cursor-pointer bg-gray-700/[.7] z-40"
        style={{ transform: props.visibility ? "scale(1)" : "scale(0)" }}
        onClick={props.closeModal}
      ></div>
    </Fragment>
  );
};
export default Modal;
