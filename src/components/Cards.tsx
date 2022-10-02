import Card from "./Card";

const Cards = (props: any) => {
  return props.list.map((item: any, index: any) => {
    return (
      <Card
        id={item.id}
        img={item.img}
        title={item.title}
        caption={item.caption}
        link={item.link}
        color={item.color}
        deleteHandler={(event:any) => props.deleteHandler(event,item.id)}
        key={index}
      />
    );
  });
};

export default Cards;
