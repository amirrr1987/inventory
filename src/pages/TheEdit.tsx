import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../components/Button";
import Container from "../components/Container";
import InputItem from "../components/InputItem";
import ListContext from "../contexts/ListContext";
const TheEdit = () => {
  let obj = {
    img: "",
    title: "",
    caption: "",
    link: "",
    color: "",
  };

  const [temp, setTemp] = useState(obj);
  const params = useParams();
  let id: string | number;

  const { list, setList } = useContext(ListContext);

  const getId = () => {
    return list.findIndex((item: any) => {
      if (String(item.id) == String(params.id)) {
        return item.id;
      }
    });
  };

  useEffect(() => {
    id = getId();
    setTemp(list[id]);
  }, []);

  const EditItemHandler = () => {
    list.map((item: any) => {
      if (item.id == params.id) {
        Object.assign(item, temp);
        return true;
      }
    });

    // setList([...list]);
  };

  return (
    <main>
      <section className="py-12">
        <Container>
          <div className="grid lg:grid-cols-3">
            <div className="lg:col-start-2 bg-light-50 border p-4">
              <InputItem
                label="img"
                value={temp.img}
                type="text"
                handler={(event: any) =>
                  setTemp({ ...temp, img: event.target.value })
                }
              />
              <InputItem
                label="title"
                value={temp.title}
                type="text"
                handler={(event: any) =>
                  setTemp({ ...temp, title: event.target.value })
                }
              />
              <InputItem
                label="caption"
                value={temp.caption}
                handler={(event: any) =>
                  setTemp({ ...temp, caption: event.target.value })
                }
              />
              <InputItem
                label="link"
                type="text"
                value={temp.link}
                handler={(event: any) =>
                  setTemp({ ...temp, link: event.target.value })
                }
              />
              <InputItem
                label="color"
                type="text"
                value={temp.color}
                handler={(event: any) =>
                  setTemp({ ...temp, color: event.target.value })
                }
              />
              <div>
                <Button onClick={EditItemHandler}>Add</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};
export default TheEdit;
