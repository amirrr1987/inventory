const InputItem = (props:any) => {
  return (
    <div className="mb-4">
      <label htmlFor="" className="block mb-1">
        {props.label}:
      </label>
      <input
        value={props.value}
        onInput={props.handler}
        type="text"
        className="border w-full focus:outline-light-800 p-2"
      />
    </div>
  );
};
export default InputItem;