import { createContext, useState } from "react";

export const ListContext = createContext<any[] | null>(null);

const ListProvider: any = (props: any) => {
  const [list, setList] = useState([
    {
      id: 1,
      img: "https://picsum.photos/id/567/400/250",
      title: "title 01",
      caption:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, illum?",
      link: "https://picsum.photos/id/237/200/300",
      color: "#ca9191",
    },
    {
      id: 2,
      img: "https://picsum.photos/id/567/400/250",
      title: "title 02",
      caption:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, illum?",
      link: "https://picsum.photos/",
      color: "#02a029",
    },
    {
      id: 3,
      img: "https://picsum.photos/id/567/400/250",
      title: "title 03",
      caption:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, illum?",
      link: "https://picsum.photos/",
      color: "#30ca29",
    },
    {
      id: 4,
      img: "https://picsum.photos/id/567/400/250",
      title: "title 04",
      caption:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, illum?",
      link: "https://picsum.photos/",
      color: "#ff0029",
    },
    {
      id: 5,
      img: "https://picsum.photos/id/567/400/250",
      title: "title 05",
      caption:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, illum?",
      link: "https://picsum.photos/",
      color: "#f2c529",
    },
    {
      id: 6,
      img: "https://picsum.photos/id/567/400/250",
      title: "title 06",
      caption:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, illum?",
      link: "https://picsum.photos/",
      color: "#ff00a9",
    },
  ]);
  return (
    <ListContext.Provider value={[list, setList]}>
      {props.children}
    </ListContext.Provider>
  );
};

export default ListProvider;
