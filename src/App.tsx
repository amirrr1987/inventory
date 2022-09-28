import { BrowserRouter, Route, Routes } from "react-router-dom";
import TheAdmin from "./views/TheAdmin";
import TheHome from "./pages/TheHome";
import TheList from "./pages/TheList";
import TheAdd from "./pages/TheAdd";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TheAdmin />}>
          <Route path="/" element={<TheHome />} />
          <Route path="/list" element={<TheList />} />
          <Route path="/add" element={<TheAdd />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
