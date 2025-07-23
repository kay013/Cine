import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Index from "./Pages/Index";
import Filmes from "./Pages/Filmes";
import Series from "./Pages/Series";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Inter from "./Pages/Inter";

import "./style.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Index />} />
          <Route path="/filmes" element={<Filmes />} />
          <Route path="/series" element={<Series />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/inter" element={<Inter />} />
      </Routes>
    </Router>
  );
}

export default App;
