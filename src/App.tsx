import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TheAdmin from "./views/TheAdmin";
import TheHome from "./pages/TheHome";
import TheList from "./pages/TheList";
import TheAdd from "./pages/TheAdd";
import TheEdit from "./pages/TheEdit";
import { ListContextProvider } from "./contexts/ListContext";
import TheNotFound from "./pages/TheNotFound";

function App() {
  return (
    <ListContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<TheAdmin />}>
            <Route path="/" element={<TheHome />} />
            <Route path="/list" element={<TheList />} />
            <Route path="/list/:id" element={<TheEdit />} />
            <Route path="/add" element={<TheAdd />} />
            <Route path="*" element={<TheNotFound />} />
          </Route>
        </Routes>
      </Router>
    </ListContextProvider>
  );
}

export default App;
