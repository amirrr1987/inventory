import { useState } from "react";
import Button from "../components/Button";
import Container from "../components/container";

const TheAdd = () => {
  const addToListHandler = () => {
    console.log("addToListHandler");
    let temp = {
      img,
      title,
      caption,
      link,
      color,
    };
    console.log(temp);
  };

  const [img, setImg] = useState("");
  const imgHandler = (event: any) => {
    setImg(event.target.value);
  };

  const [title, setTitle] = useState("");
  const titleHandler = (event: any) => {
    setTitle(event.target.value);
  };

  const [caption, setCaption] = useState("");
  const captionHandler = (event: any) => {
    setCaption(event.target.value);
  };

  const [link, setLink] = useState("");
  const linkHandler = (event: any) => {
    setLink(event.target.value);
  };

  const [color, setColor] = useState('');
  const colorHandler = (event: any) => {
    setColor(event.target.value);
  };

  return (
    <main>
      <section className="py-12">
        <Container>
          <div className="grid grid-cols-3">
            <div className="col-start-2 bg-light-50 border p-4">
              <div className="mb-4">
                <label htmlFor="" className="block mb-1">
                  img:
                </label>
                <input
                  value={img}
                  onInput={imgHandler}
                  type="text"
                  className="border w-full focus:outline-light-800 p-2"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="" className="block mb-1">
                  title:
                </label>
                <input
                  value={title}
                  onInput={titleHandler}
                  type="text"
                  className="border w-full focus:outline-light-800 p-2"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor=""
                  className="block mb-1 focus:outline-light-800 p-2"
                >
                  caption:
                </label>
                <textarea
                  value={caption}
                  onInput={captionHandler}
                  className="w-full border focus:outline-light-800 p-2"
                  rows={5}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor=""
                  className="block mb-1 focus:outline-light-800 p-2"
                >
                  link:
                </label>
                <input
                  value={link}
                  onInput={linkHandler}
                  type="text"
                  className="border w-full focus:outline-light-800 p-2"
                />
              </div>
              <div className="mb-12 flex items-center gap-x-4">
                <label htmlFor="">
                  color:
                </label>
                <input
                  value={color}
                  onInput={colorHandler}
                  type="color"
                  
                />
              </div>
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
