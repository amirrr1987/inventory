import { Fragment, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ListContext from "../contexts/ListContext";
import Container from "./Container";
const Categories = () => {
  const { categories, getCategories, getProducts, products } =
    useContext(ListContext);

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  const getImage = (category: string) => {
    const index = products.findIndex((item: any) => {
      if (item.category === category) {
        return item.image;
      }
    });
    return products[index].image;
  };
  const Cards = (props: any) => {
    return categories.map((category: any, index: any) => {
      return (
        <div
          key={index}
          className="relative border p-4 overflow-hidden category-card bg-white"
        >
          <img
            className="w-full h-60 object-contain"
            src={getImage(category)}
            alt=""
          />
          <div className="absolute inset-0 w-full p-4 bg-white category-card__body">
            <h4 className="text-xl capitalize border-b pb-2 mb-2">
              {category}
            </h4>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              praesentium labore esse autem architecto officiis nihil atque
              ipsam, mollitia facere voluptatem perspiciatis accusantium! Odio
              totam hic nihil nulla atque. Reiciendis.
            </p>
            <NavLink
              to={`/${category}`}
              className="bg-blue-400 text-white px-2 py-1 rounded text-sm capitalize"
            >
              more..
            </NavLink>
          </div>
        </div>
      );
    });
  };

  return (
    <Fragment>
      <section className="py-12">
        <Container>
          <h1 className="text-2xl font-bold mb-4 border-b pb-2">Categories:</h1>
        </Container>
        <Container>
          <div className="grid grid-cols-4 gap-4">
            <Cards />
          </div>
        </Container>
      </section>
    </Fragment>
  );
};
export default Categories;
