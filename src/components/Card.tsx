import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Card = (props: any) => {
  return (
    <div className="relative bg-light-500 rounded overflow-hidden">
      <Button
        type="icon"
        color="red"
        circle
        className="absolute left-2 top-2"
        onClick={props.deleteHandler}
      >
        <Icon icon="icon-park-outline:close" />
      </Button>
      <Link to={"/list/" + props.id}>
        <Button
          type="icon"
          color="green"
          circle
          className="absolute right-2 top-2"
          onClick={props.deleteHandler}
        >
          <Icon icon="icon-park-outline:edit" />
        </Button>
      </Link>
      <img className="w-full" src={props.img} alt="" />
      <div className="p-4">
        <h4
          className="text-lg font-medium capitalize"
          style={{ color: props.color }}
        >
          {props.title}
        </h4>
        <p className="mb-4 text-dark-200">{props.caption}</p>
        <a
          href={props.link}
          target="_blank"
          className="bg-cyan-500 text-cyan-50 capitalize w-20 h-8 flex items-center justify-center rounded"
        >
          more
        </a>
      </div>
    </div>
  );
};
export default Card;
