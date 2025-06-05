
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div id="menu">
      <ul id="menu_list">
        <li><h2>Menú</h2></li>
        <li><Link to="/">Inicio</Link></li>
        <ul id="menu_secciones">
          <h2>Secciones</h2>
          <li><Link to="/terror">Terror</Link></li>
          <li><Link to="/ciencia-ficcion">Ciencia Ficción</Link></li>
          <li><Link to="/novela-literaria">Novela Literaria</Link></li>
          <li><Link to="/segunda-guerra-mundial">Segunda Guerra Mundial</Link></li>
        </ul>
        <li><Link to="/registracion">Registración</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </div>
  );
}

export default Menu;
