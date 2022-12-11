import { Fragment, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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

  const { list, setList, getOne, updateOne } = useContext(ListContext);

  let { id } = useParams();

  const setterItem = () => {
    const one = getOne(id);
    setTemp(one);
  };

  useEffect(() => {
    setterItem();
  }, []);


  const navigate = useNavigate();
  const EditItemHandler = () => {
    updateOne(id, temp);
    navigate("/list");
  };

  return (
    <Fragment>
      <section className="py-12">
        <Container>
          <div className="grid xl:grid-cols-[1fr,2fr,1fr]">
            <div className="xl:col-start-2 bg-light-50 border p-4">
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
                type="text"
                value={temp.title}
                handler={(event: any) =>
                  setTemp({ ...temp, title: event.target.value })
                }
              />
              <InputItem
                label="caption"
                value={temp.caption}
                handler={(event: any) =>
                  setTemp({
                    ...temp,
                    caption: event.target.value,
                  })
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
                <Button onClick={EditItemHandler}>Edit</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </Fragment>
  );
};
export default TheEdit;
