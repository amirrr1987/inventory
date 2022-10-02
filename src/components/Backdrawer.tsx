const Backdrawer = (props: any) => {
  return (
    <div
      className="fixed w-screen h-screen inset-0 cursor-pointer bg-gray-700/[.7] z-40"
      style={{ transform: props.visibility ? "scale(1)" : "scale(0)" }}
      onClick={props.closeModal}
    ></div>
  );
};
export default Backdrawer;