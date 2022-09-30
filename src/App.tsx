import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TheAdmin from "./views/TheAdmin";
import TheHome from "./pages/TheHome";
import TheList from "./pages/TheList";
import TheAdd from "./pages/TheAdd";
import { ContextProvider } from "./context/ListContext";

function App() {
  return (
    <ContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<TheAdmin />}>
            <Route path="/" element={<TheHome />} />
            <Route path="/list" element={<TheList />} />
            <Route path="/add" element={<TheAdd />} />
          </Route>
        </Routes>
      </Router>
    </ContextProvider>
  );
}

export default App;
