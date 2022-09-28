import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter,Outlet, Route, Routes } from "react-router-dom";
import TheAdmin from './views/TheAdmin';
import TheHome from './pages/TheHome';
import TheAbout from "./pages/TheAbout";


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TheAdmin />}>
          <Route path="/" element={<TheHome />} />
          <Route path="/about" element={<TheAbout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
