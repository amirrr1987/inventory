import { Icon } from "@iconify/react";
import { Fragment } from "react";
import Backdrawer from "./Backdrawer";
import Button from "./Button";

const Modal = (props: any) => {
  return (
    <Fragment>
      <div
        className="fixed w-196 h-96 m-auto inset-0 bg-white rounded p-4 z-50 duration-300 shadow-lg border grid grid-rows-[max-content,1fr,max-content]"
        style={{ transform: props.visibility ? "scale(1)" : "scale(0)" }}
      >
        <div className="">
          <Button type="icon" circle color="red" onClick={props.closeModal}>
            <Icon icon="icon-park-outline:close" />
          </Button>
        </div>
        <div className="p-4">{props.children}</div>
        <div>{props.footer}</div>
      </div>
      <Backdrawer visibility={props.visibility} closeModal={props.closeModal} />
    </Fragment>
  );
};
export default Modal;
