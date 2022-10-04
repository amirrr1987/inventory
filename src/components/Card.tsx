import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";

const Card = (props: any) => {
  const [caption, setCaption] = useState("");
  const getCaption = () => {
    let txt = props.caption;
    txt = txt.substring(1, 200);
    let index = txt.lastIndexOf(" ");
    let temp = txt.substring(1, index);
    setCaption(temp);
  };
  useEffect(() => {
    getCaption();
  }, []);
  return (
    <div className="relative bg-light-500 rounded overflow-hidden grid grid-rows-[max-content,1fr]">
      <Button
        type="icon"
        color="red"
        circle
        className="absolute left-2 top-2"
        onClick={props.deleteHandler}
      >
        <Icon icon="icon-park-outline:close" />
      </Button>
      <NavLink
        to={"/list/edit/" + props.id}
        className="absolute  right-2 top-2"
      >
        <Button
          type="icon"
          color="green"
          circle
          className=""
        >
          <Icon icon="icon-park-outline:edit" />
        </Button>
      </NavLink>
      <img className="w-full object-cover" src={props.img} alt="" />
      <div className="p-4 grid grid-rows-[max-content,1fr,max-content]">
        <h4
          className="text-lg font-medium capitalize"
          style={{ color: props.color }}
        >
          {props.title}
        </h4>
        <p className="mb-4 text-dark-200">{caption}</p>
        <NavLink
          to={`single/${props.id}`}
          className="bg-cyan-500 text-cyan-50 capitalize w-20 h-8 flex items-center justify-center rounded"
        >
          more
        </NavLink>
      </div>
    </div>
  );
};
export default Card;
