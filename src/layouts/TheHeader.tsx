import { Fragment } from "react";
import Slider from "../components/Slider";
import TheNavbar from "../components/TheNavbar";

const TheHeader = () => {
  return (
    <Fragment>
      <header>
        <TheNavbar />
        <Slider />
      </header>
    </Fragment>
  );
};
export default TheHeader;
