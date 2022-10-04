import { Fragment, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../components/Container";
import ListContext from "../contexts/ListContext";


const TheSingle = () => {
  const { id } = useParams();
  const { getProduct, product } = useContext(ListContext);
  useEffect(() => {
    getProduct(id)
  }, []);
  return (
    <Fragment>
      <section className="py-12">
        <Container>
          <div className="grid grid-cols-2">
            <img
              className="w-full h-96 object-cover rounded-xl"
              src={product.image}
              alt=""
            />
            <div className="p-4">
              <div className="text-2xl capitalize">{product.title}</div>
              <div className="">{product.price}</div>
            </div>
          </div>
        </Container>
      </section>
    </Fragment>
  );
};

export default TheSingle;
