import { Fragment, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../components/Container";
import ListContext from "../contexts/ListContext";

const TheSingle = () => {
  const { getProduct, product } = useContext(ListContext);

  const params: any = useParams();

  useEffect(() => {
    getProduct(params.id);
    params.category = product.category;
  }, []);

  return (
    <Fragment>
      <section className="py-12">
        <Container>
          <div className="grid grid-cols-3">
            <img
              className="w-full h-96 object-contain rounded-xl p-4 bg-white border"
              src={product.image}
              alt=""
            />
            <div className="p-4">
              <div className="text-2xl capitalize mb-4">{product.title}</div>
              <div className="text-base mb-4">{product.description}</div>
              <div className="">Price: {product.price}</div>
              <div className="">Category: {product.category}</div>
            </div>
          </div>
        </Container>
      </section>
    </Fragment>
  );
};

export default TheSingle;
