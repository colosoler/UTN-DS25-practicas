import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx"
import Terror from "./pages/Terror";
import NovelaLiteraria from "./pages/NovelaLiteraria";
import CienciaFiccion from "./pages/CienciaFiccion";
import SegundaGuerraMundial from "./pages/SegundaGuerraMundial";
import Registracion from "./pages/Registracion.jsx";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terror" element={<Terror />} />
        <Route path="/novela-literaria" element={<NovelaLiteraria />} />
        <Route path="/ciencia-ficcion" element={<CienciaFiccion />} />
        <Route path="/segunda-guerra-mundial" element={<SegundaGuerraMundial />} />
        <Route path="/registracion" element={<Registracion />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
}

export default App;
