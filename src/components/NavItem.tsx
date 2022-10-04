import { NavLink } from "react-router-dom";

const NavItem = (props: any) => {
  return (
    <li>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-red-500 no-underline capitalize text-lg"
            : "text-blue-50 no-underline capitalize text-lg"
        }
        to={props.to}
        // style={({ isActive }) => {
        //   return {
        //     color: isActive ? "red" : "",
        //   };
        // }}
      >
        {props.children}
      </NavLink>
    </li>
  );
};
export default NavItem;
