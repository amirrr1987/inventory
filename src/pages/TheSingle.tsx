import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../components/Container";
import ListContext from "../contexts/ListContext";
import { ContainerModel } from "../models";

const TheSingle = () => {
  const { id } = useParams();

  const { getOne } = useContext(ListContext);
  let obj = {
    id: 0,
    img: "",
    title: "",
    caption: "",
    link: "",
    color: "",
  };
  const [item, setItem] = useState<ContainerModel>(obj);
  useEffect(() => {
    //   const temp = ;

    setItem(getOne(id));
    //   console.log(item);
  }, []);
  return (
    <main>
      <section className="py-12">
        <Container>
          <div
            className="grid grid-cols-2"
            style={{ backgroundColor: item.color }}
          >
            <img className="w-full h-full object-cover" src={item.img} alt="" />
            <div className="p-4">
              <div>{item.id}</div>
              <div>{item.title}</div>
              <div>{item.caption}</div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default TheSingle;
