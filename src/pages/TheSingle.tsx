import { Fragment, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../components/Container";
import ListContext from "../contexts/ListContext";
import { GetCategoriesApi } from "../services";

const TheSingle = () => {
  const { getProduct, product } = useContext(ListContext);

  const params: any = useParams();

  useEffect(() => {
    getProduct(params.id);
    params.category = product.category;
  }, []);

  let dd = {
    userId: 1,
    date:"2020-02-03",
    products: [
      { productId: 5, quantity: 1 },
      { productId: 1, quantity: 5 },
    ],
  };

  const addToCart = async() => {
    dd.userId = 1;
    dd.products.push({ productId: product.id, quantity: 1 });


    try {
     await  GetCategoriesApi(dd)
    } catch (error) {}
  };
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
            <div className="p-4 col-span-2">
              <div className="text-2xl font-medium capitalize">
                {product.title}
              </div>
              <hr className="mt-2 mb-4" />
              <div className="text-base mb-4">{product.description}</div>
              <div className="">
                <span className="font-medium capitalize">price: </span>
                {product.price}
              </div>
              <div className="">
                <span className="font-medium capitalize">category: </span>
                <span>{product.category}</span>
              </div>
              <div className="py-8">
                <button
                  className="bg-green-400 w-40 h-8 rounded capitalize"
                  onClick={addToCart}
                >
                  add
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </Fragment>
  );
};

export default TheSingle;
