const Container = (props: any) => {
  return (
    <div className={`container mx-auto px-4 ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Container;
