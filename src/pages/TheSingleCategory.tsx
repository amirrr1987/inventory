import { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Container from "../components/Container";
import ListContext from "../contexts/ListContext";

const TheSingleCategory = () => {
  const { products, getProducts, getWords } = useContext(ListContext);
  const [singleCategory, setSingleCategory]: any = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  // useEffect(() => {
  //   singleCategroyProducts();
  // }, [getProducts]);

  const params = useParams();

  const SingleCategroyProducts = () => {
    let arr = products.filter((element: any) => {
      return element.category == params.name;
    });

    return arr.map((item: any, index: any) => {
      console.log(item);

      return (
        <div
          key={index}
          className="border p-4 relative grid grid-rows-[max-content,1fr] gap-y-8 bg-white"
        >
          <img className="w-full h-40 object-contain" src={item.image} alt="" />
          <div className="py-4 grid grid-rows-[max-content,1rem,1fr, max-content,max-content] gap-y-4">
            <div className="absolute left-4 top-4">{item.id}</div>
            <div>{item.title}</div>
            <hr className="" />
            <div className="">
              
              {getWords(item.description,200)}
            </div>
            <div className="flex justify-between">
              <div>{item.price}</div>
              <div>{item.category}</div>
            </div>
            <div className="border border-gray-400 rounded overflow-hidden">
              <div
                style={{
                  backgroundColor: "#ffd210",
                  width: `${item.rating.rate * 20}%`,
                }}
                className="p-1 text-xs h-full"
              >
                {item.rating.rate}
                {" / "}5
              </div>
            </div>

            <div>Vote Count: {item.rating.count}</div>
            <div>
              <NavLink
                className="bg-blue-400 text-white  text-sm inline-flex justify-center items-center w-20 h-8 rounded"
                to={`/${item.category}/${item.id}`}
              >
                More
              </NavLink>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <section className="py-12">
      <Container>
        <div className="grid grid-cols-4 gap-8">
          <SingleCategroyProducts />
        </div>
      </Container>
    </section>
  );
};
export default TheSingleCategory;
