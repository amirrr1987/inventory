import { Outlet } from "react-router-dom";

const TheMain = () => {
    return (
      <main className="bg-light-200">
        <Outlet />
      </main>
    );
}
export default TheMain;