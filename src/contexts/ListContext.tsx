import { useState, createContext, useEffect } from "react";
import { GetProductApi, GetProductsApi } from "../services";

const ListContext = createContext<any | null>(null);

export function ListContextProvider(props: any) {
  const [list, setList] = useState([
    {
      id: 1,
      img: "https://frtbn1-cdn.zarebin.ir/Fux9yWBj3PRjgeSkHn4kkw/4764998504/blog/wp-content/uploads/2021/05/technology-background-template-modern-dark-sparkling-geometry-Top.jpg?zb_src=pikfree.ir&zb_dmn=pikfree.ir&zb_scm=https",
      title: "title 01",
      caption:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, illum?",
      link: "https://picsum.photos/id/237/200/300",
      color: "#ca9191",
    },
    {
      id: 2,
      img: "https://frtbn1-cdn.zarebin.ir/Fux9yWBj3PRjgeSkHn4kkw/4764998504/blog/wp-content/uploads/2021/05/technology-background-template-modern-dark-sparkling-geometry-Top.jpg?zb_src=pikfree.ir&zb_dmn=pikfree.ir&zb_scm=https",
      title: "title 02",
      caption:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, illum?",
      link: "https://picsum.photos/",
      color: "#02a029",
    },
    {
      id: 3,
      img: "https://frtbn1-cdn.zarebin.ir/Fux9yWBj3PRjgeSkHn4kkw/4764998504/blog/wp-content/uploads/2021/05/technology-background-template-modern-dark-sparkling-geometry-Top.jpg?zb_src=pikfree.ir&zb_dmn=pikfree.ir&zb_scm=https",
      title: "title 03",
      caption:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, illum?",
      link: "https://picsum.photos/",
      color: "#30ca29",
    },
    {
      id: 4,
      img: "https://frtbn1-cdn.zarebin.ir/Fux9yWBj3PRjgeSkHn4kkw/4764998504/blog/wp-content/uploads/2021/05/technology-background-template-modern-dark-sparkling-geometry-Top.jpg?zb_src=pikfree.ir&zb_dmn=pikfree.ir&zb_scm=https",
      title: "title 04",
      caption:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, illum?",
      link: "https://picsum.photos/",
      color: "#ff0029",
    },
    {
      id: 5,
      img: "https://frtbn1-cdn.zarebin.ir/Fux9yWBj3PRjgeSkHn4kkw/4764998504/blog/wp-content/uploads/2021/05/technology-background-template-modern-dark-sparkling-geometry-Top.jpg?zb_src=pikfree.ir&zb_dmn=pikfree.ir&zb_scm=https",
      title: "title 05",
      caption:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, illum?",
      link: "https://picsum.photos/",
      color: "#f2c529",
    },
    {
      id: 6,
      img: "https://frtbn1-cdn.zarebin.ir/Fux9yWBj3PRjgeSkHn4kkw/4764998504/blog/wp-content/uploads/2021/05/technology-background-template-modern-dark-sparkling-geometry-Top.jpg?zb_src=pikfree.ir&zb_dmn=pikfree.ir&zb_scm=https",
      title: "title 06",
      caption:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, illum?",
      link: "https://picsum.photos/",
      color: "#ff00a9",
    },
  ]);
  const [comments, setComments] = useState<any>([]);
  const [posts, setPosts] = useState<any>([]);
  const [photos, setPhotos] = useState<any>([]);
  const [users, setUsers] = useState<any>([]);

  const [products, setProducts] = useState<any>([]);
  const [product, setProduct] = useState<any>({});

  const getProducts = async () => {
    try {
      const { data }: any = await GetProductsApi();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  const getProduct = async (id: string) => {
    try {
      const { data } = await GetProductApi(id);
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getComments = async () => {
    try {
      const data: any = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );
      let res: any = await data.json();
      setComments(res);
    } catch (error) {
      console.log(error);
    }
  };
  const getPosts = async () => {
    try {
      const data: any = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      let res: any = await data.json();
      setPosts(res);
    } catch (error) {
      console.log(error);
    }
  };
  const getPhotos = async () => {
    try {
      const data: any = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      let res: any = await data.json();
      setPhotos(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // getProducts();
    // getComments();
    // getPhotos();
    // getPosts();
  });

  const getOne = (id: any) => {
    let index = list.findIndex((item) => {
      return String(item.id) === String(id);
    });
    return list[index];
  };
  const updateOne = (id: number, obj: any) => {
    const index = list.findIndex((item) => {
      return item.id == id;
    });
    Object.assign(list[index], obj);
  };

  const getWords = (content: string, count: number) => {
    let txt = content;
    txt = txt.substring(1, count);
    let index = txt.lastIndexOf(" ");
    return txt.substring(1, index);
  };

  const dataContext = {
    list,
    setList,
    getOne,
    updateOne,
    getWords,
    users,
    setUsers,
    products,
    setProducts,
    getProducts,
    getProduct,
    product,
  };

  return (
    <ListContext.Provider value={dataContext}>
      {props.children}
    </ListContext.Provider>
  );
}

export default ListContext;
