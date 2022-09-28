import { Icon } from "@iconify/react";
import { useState } from "react";
const SearchBtn = () => {
  const [searchValue, setSearchValue] = useState("");
  const searchHandler = (event: any) => {
    setSearchValue(event.target.value);
  };
  return (
    <div className="bg-white py-1 px-4 flex items-center rounded-full">
      <input
        value={searchValue}
        onInput={searchHandler}
        type="text"
        className="focus:outline-transparent"
      />
      <button className="flex items-center justify-center rounded-full p-1">
        <Icon
          icon={
            searchValue.length > 3
              ? "icon-park-outline:loading"
              : "icon-park-outline:search"
          }
        />
      </button>
    </div>
  );
};
export default SearchBtn;
