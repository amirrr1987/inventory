import { NavLink } from "react-router-dom";

const NavItem = (props: any) => {
  return (
    <li>
      <NavLink
        className="text-blue-50 no-underline capitalize text-lg"
        to={props.to}
      >
        {props.children}
      </NavLink>
    </li>
  );
};
export default NavItem;
