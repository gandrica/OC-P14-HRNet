import { Routes, Route } from "react-router-dom";

import MainPage from "./pages/mainPage/MainPage";
import Home from "./pages/home/Home";
import Employees from "./pages/employees/Employees";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route index element={<Home />} />
        <Route path="employees" element={<Employees />} />
      </Route>
    </Routes>
  );
}

export default App;
