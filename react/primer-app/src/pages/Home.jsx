import { Link } from "react-router-dom";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header />
      <Menu />

      <div className="contenido">
        <div id="contenido_primera_fila">
          <div className="contenido_bloque">
            <Link to="/terror">
              <h2>Terror</h2>
            </Link>
            <img src="/images/terror/soy_leyenda.jpg" width="100" height="130" alt="Soy leyenda" />
            <h4>Soy leyenda</h4>
            <h5>Richard Matheson</h5>
          </div>
          <div className="contenido_bloque">
            <Link to="/ciencia-ficcion">
              <h2>Ciencia Ficción</h2>
            </Link>
            <img src="/images/ciencia_ficcion/metro_2033.jpg" width="100" height="130" alt="Metro 2033" />
            <h4>Metro 2033</h4>
            <h5>Dmitry Glukhovsky</h5>
          </div>
        </div>

        <div id="contenido_segunda_fila">
          <div className="contenido_bloque">
            <Link to="/novela-literaria">
              <h2>Novela Literaria</h2>
            </Link>
            <img src="/images/novela_literaria/cien_años_de_soledad.jpg" width="100" height="130" alt="Cien años de soledad" />
            <h2>Cien años de soledad</h2>
            <h5>Gabriel García Márquez</h5>
          </div>
          <div className="contenido_bloque">
            <Link to="/segunda-guerra-mundial">
              <h2>Segunda Guerra Mundial</h2>
            </Link>
            <img src="/images/segunda_guerra_mundial/el_dia_d_de_churchill.jpg" width="100" height="130" alt="El día D de Churchill" />
            <h4>El día D de Churchill</h4>
            <h5>Allen Packwood, Richard Dannatt</h5>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
