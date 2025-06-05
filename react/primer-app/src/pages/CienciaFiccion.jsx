import React from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import Libro from '../components/Libros';


const CienciaFiccion = () => {
  return (
    <div>
      <Header />
      <Menu />

      <main className="contenido">
        <div id="contenido_primera_fila">
          <Libro
            titulo="Metro 2033"
            autor="Dmitry Glukhovsky"
            imagen="/images/ciencia_ficcion/metro_2033.jpg"
            descripcion="Año 2033, Moscú. Los supervivientes de la terrible guerra nuclear que ha devastado el mundo se han refugiado bajo tierra, en la red del metro..."
          />
          <Libro
            titulo="Neuromante"
            autor="William Gibson"
            imagen="/images/ciencia_ficcion/neuromante.webp"
            descripcion="Un hacker caído en desgracia, Case, es contratado para realizar el mayor hackeo de su vida en un mundo dominado por la cibertecnología y las inteligencias artificiales."
          />
          <Libro
            titulo="La vieja guardia"
            autor="John Scalzi"
            imagen="/images/ciencia_ficcion/la_vieja_guardia.webp"
            descripcion="Ancianos se enrolan en las Fuerzas de Defensa Coloniales, el ejército que lucha por la supervivencia de la humanidad. Se les da el cuerpo de un joven de veinte años."
          />
        </div>
        <div id="contenido_segunda_fila">
          <Libro
            titulo="El fin de la infancia"
            autor="Arthur C. Clarke"
            imagen="/images/ciencia_ficcion/el_fin_de_la_infancia.webp"
            descripcion="La llegada de los superseñores transforma la Tierra en una utopía, pero a un costo inesperado para la humanidad."
          />
          <Libro
            titulo="1984"
            autor="George Orwell"
            imagen="/images/ciencia_ficcion/1984.webp"
            descripcion="Winston Smith lucha contra la opresión del Gran Hermano en una sociedad totalitaria."
          />
          <Libro
            titulo="La guerra de los mundos"
            autor="H. G. Wells"
            imagen="/images/ciencia_ficcion/la_guerra_de_los_mundos.webp"
            descripcion="La invasión marciana pone a prueba la supervivencia de la humanidad."
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CienciaFiccion;
