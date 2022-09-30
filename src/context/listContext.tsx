import { createContext } from "react";

export const ListContext = createContext(null);

const ListProvider: any = (props: any) => {
  
  return (
    <ListContext.Provider value={props}>{props.children}</ListContext.Provider>
  );
};

export default ListProvider;
