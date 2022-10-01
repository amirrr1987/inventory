import { createContext, useContext, useState } from "react";
import Cards from "../components/Cards";
import Container from "../components/container";
import ListContext from "../contexts/ListContext";


const TheList = () => {
  
  const { list, setList } = useContext(ListContext);

  const deleteHandler = (event: any, id: any) => {
    let useList = list;
    let index = useList.findIndex((item:any) => {
      return item.id === id;
    });
    useList.splice(index, 1);
    setList([...useList]);
  };
  return (
    <main>
      {/* <ListProvider> */}
        <section className="p-12">
          <Container>
            <div></div>
            <div className="grid grid-cols-4 gap-8">
              <Cards list={list} deleteHandler={deleteHandler} />
            </div>
          </Container>
        </section>
      {/* </ListProvider> */}
    </main>
  );
};
export default TheList;
