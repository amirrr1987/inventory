const Auth = (props: any) => {
  return (
    <div>
      <button
        className="text-red-50 py-1 px-4 rounded"
        onClick={props.openModal}
      >
        Register / Login
      </button>
    </div>
  );
};
export default Auth;
