import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Libro from "../components/Libros";

export default function NovelaLiteraria() {
  return (
    <>
      <Header />
      <Menu />
      <div className="contenido">
        <div id="contenido_primera_fila">
          <Libro
            titulo="Cien años de soledad"
            autor="Gabriel García Márquez"
            imagen="/images/novela_literaria/cien_años_de_soledad.jpg"
            descripcion="La historia de la familia Buendía en el pueblo ficticio de Macondo, una obra maestra del realismo mágico que explora temas de soledad, amor y destino."
          />
          <Libro
            titulo="Don Quijote de la Mancha"
            autor="Miguel de Cervantes"
            imagen="/images/novela_literaria/don_quijote_de_la_mancha.jpg"
            descripcion="La historia de un hidalgo que pierde la cordura y decide convertirse en caballero andante, acompañado por su fiel escudero Sancho Panza."
          />
          <Libro
            titulo="Orgullo y prejuicio"
            autor="Jane Austen"
            imagen="/images/novela_literaria/orgullo_y_prejuicio.webp"
            descripcion="Una novela romántica que explora las complejidades del amor, la familia y las diferencias sociales en la Inglaterra del siglo XIX."
          />
        </div>
        <div id="contenido_segunda_fila">
          <Libro
            titulo="Crimen y castigo"
            autor="Fiódor Dostoyevski"
            imagen="/images/novela_literaria/crimen_y_castigo.webp"
            descripcion="La lucha moral de un joven estudiante que comete un asesinato y enfrenta las consecuencias psicológicas y éticas de su acto."
          />
          <Libro
            titulo="Madame Bovary"
            autor="Gustave Flaubert"
            imagen="/images/novela_literaria/madame_bovary.webp"
            descripcion="La trágica historia de Emma Bovary, una mujer atrapada en un matrimonio aburrido que busca escapar a través de relaciones amorosas y el lujo."
          />
          <Libro
            titulo="El gran Gatsby"
            autor="F. Scott Fitzgerald"
            imagen="/images/novela_literaria/el_gran_gatsby.webp"
            descripcion="Una crítica de la sociedad estadounidense de los años 20, centrada en la vida de Jay Gatsby y su obsesión por recuperar el amor perdido."
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
