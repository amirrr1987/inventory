import { Link } from "react-router-dom";

const NavItem = (props: any) => {
  return (
    <li>
      <Link
        className="text-blue-50 no-underline capitalize text-lg"
        to={props.to}
      >
        {props.children}
      </Link>
    </li>
  );
};
export default NavItem;
