import Card from "./Card";

const Cards = (props: any) => {
  return props.list.map((item: any, index: any) => {
    return (
      <Card
        item={item}
        deleteHandler={(event: any) => props.deleteHandler(event, item.id)}
        key={index}
      />
    );
  });
};

export default Cards;
