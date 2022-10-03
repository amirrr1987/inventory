const InputItem = (props: any) => {

  return (
    <div className="mb-4">
      <label htmlFor="" className="block mb-1">
        {props.label}:
      </label>

      {props.type === "text" ? (
        <input
          value={props.value}
          onInput={props.handler}
          type="text"
          className="border w-full focus:outline-light-800 p-2"
        />
      ) : (
        <textarea
          value={props.value}
          onInput={props.handler}
          rows={5}
          className="w-full border p-2 focus:outline-light-800"
        />
      )}
    </div>
  );
};
export default InputItem;
