import { useContext, useState } from "react";
import Button from "../components/Button";
import Container from "../components/container";
import InputItem from "../components/InputItem";
import ListContext from "../contexts/ListContext";

const TheAdd = () => {
  let obj = {
    img: "",
    title: "",
    caption: "",
    link: "",
    color: "",
  };

  const [temp, setTemp] = useState(obj);

  const { list, setList } = useContext(ListContext);

  const addToListHandler = () => {
    setList([...list, temp]);
    setTemp(obj);
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
                handler={(event: any) =>
                  setTemp({ ...temp, img: event.target.value })
                }
              />
              <InputItem
                label="title"
                value={temp.title}
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
                value={temp.link}
                handler={(event: any) =>
                  setTemp({ ...temp, link: event.target.value })
                }
              />
              <InputItem
                label="color"
                value={temp.color}
                handler={(event: any) =>
                  setTemp({ ...temp, color: event.target.value })
                }
              />
              <div>
                <Button onClick={addToListHandler}>Add</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};
export default TheAdd;
