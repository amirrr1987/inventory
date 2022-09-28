import { Icon } from "@iconify/react";
import Button from "./Button";

const Card = (props: any) => {


  return (
    <div style={{ backgroundColor: props.color }} className="relative">
      <Button type="icon" color="red" circle className="absolute left-2 top-2" onClick={props.deleteHandler}>
        <Icon icon="icon-park-outline:close" />
      </Button>
      <img className="w-full" src={props.img} alt="" />
      <div className="p-4">
        <h4 className="text-lg font-medium capitalize">{props.title}</h4>
        <p className="mb-4 text-dark-200">{props.caption}</p>
        <a href={props.link} className="bg-cyan-500 text-cyan-50 capitalize w-20 h-8 flex items-center justify-center rounded">
          more
        </a>
      </div>
    </div>
  );
};
export default Card;
