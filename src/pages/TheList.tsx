import { Fragment, useContext, useEffect } from "react";
import Cards from "../components/Cards";
import Container from "../components/Container";
import ListContext from "../contexts/ListContext";

const TheList = () => {
  const { products, getProducts } = useContext(ListContext);
  useEffect(() => {
    getProducts();
  },[]);
  const deleteHandler = (event: any, id: any) => {};
  return (
    <Fragment>
      <section className="py-12">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Cards list={products} deleteHandler={deleteHandler} />
          </div>
        </Container>
      </section>
    </Fragment>
  );
};
export default TheList;
