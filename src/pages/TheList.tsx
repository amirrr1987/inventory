import { createContext, useContext, useState } from "react";
import Cards from "../components/Cards";
import Container from "../components/Container";
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
        <section className="py-12">
          <Container>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Cards list={list} deleteHandler={deleteHandler} />
            </div>
          </Container>
        </section>
    </main>
  );
};
export default TheList;
