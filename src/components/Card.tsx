import { Icon } from "@iconify/react";
import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ListContext from "../contexts/ListContext";
import Button from "./Button";

const Card = (props: any) => {
  const { item } = props;

  const { getWords } = useContext(ListContext);
  const [caption, setCaption] = useState("");

  useEffect(() => {
    // setCaption(getWords(props.caption, 200));
    // console.log(props);
  }, []);

  return (
    <div className="relative bg-light-50 rounded overflow-hidden grid grid-rows-[max-content,1fr] border rounded">
      <Button
        type="icon"
        color="red"
        circle
        className="absolute left-2 top-2"
        onClick={props.deleteHandler}
      >
        <Icon icon="icon-park-outline:close" />
      </Button>
      <NavLink to={"/list/edit/" + item.id} className="absolute right-2 top-2 ">
        <Button type="icon" color="green" circle className="">
          <Icon icon="icon-park-outline:edit" />
        </Button>
      </NavLink>
      <div className="h-96 bg-white p-4 flex items-center justify-center overflow-hiddend">
        <img className="max-w-2/3 " src={item.image} alt="" />
      </div>
      <div className="p-4">
        <h4 className="text-base font-medium capitalize mb-8">{item.title}</h4>
        <div className="border border-gray-400 rounded overflow-hidden">
          <div
            style={{
              backgroundColor: "#ffd210",
              width: `${item.rating.rate * 20}%`,
            }}
            className="p-1 text-xs"
          >
            {item.rating.rate}
            {" / "}
            {item.rating.count}
          </div>
        </div>
        <div className="fxlex justify-between min-h-10 items-center py-4">
          <div className="text-sm">
            <span className="font-medium">Price: </span>
            <span>${item.price}</span>
          </div>
          <div className="text-sm">
            <span className="font-medium">Category: </span>
            <span>{item.category}</span>
          </div>
        </div>
        <NavLink
          to={`/${item.category}/${item.id}`}
          className="bg-cyan-500 text-cyan-50 capitalize w-20 h-8 flex items-center justify-center rounded"
        >
          more
        </NavLink>
      </div>
    </div>
  );
};
export default Card;
