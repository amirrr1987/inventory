const Button = (props: any) => {
  if (props.type === "icon") {
    return (
      <button
        className={`w-6 h-6 flex items-center justify-center  bg-${
          props.color
        }-500 ${props.color ? "text-white" : null}
                  ${props.circle ? "rounded-full" : "rounded"}
                  `}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    );
  }
  if (props.type === "text") {
    return (
      <button
        className={`w-24 h-8 bg-${props.color}-500`}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    );
  } else {
    return (
      <button className={`w-24 h-8 bg-blue-500 text-blue-50 rounded`} onClick={props.onClick}>
        {props.children}
      </button>
    );
  }
};
export default Button;
