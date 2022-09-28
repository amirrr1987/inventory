import { createContext, useState } from "react";
import Cards from "../components/Cards";
import Container from "../components/container";

const TheList = () => {
  const [list, setList] = useState([
    {
      id: 1,
      img: "https://picsum.photos/id/567/400/250",
      title: "title 01",
      caption:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, illum?",
      link: "https://picsum.photos/",
      color: "#f1f1f1",
    },
    {
      id: 2,
      img: "https://picsum.photos/id/567/400/250",
      title: "title 02",
      caption:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, illum?",
      link: "https://picsum.photos/",
      color: "#f2c529",
    },
  ]);
  const ListContext = createContext(list);

  const deleteHandler = (event: any, id: any) => {
    let useList = list;
    let index = useList.findIndex((item) => {
      return item.id === id;
    });
    useList.splice(index, 1);
    setList([...useList]);
  };
  return (
    <main>
      <section className="p-12">
        <Container>
          <div></div>
          <div className="grid grid-cols-4 gap-8">
            <Cards list={list} deleteHandler={deleteHandler} />
          </div>
        </Container>
      </section>
    </main>
  );
};
export default TheList;
