import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Libro from "../components/Libros";

function Terror() {
  return (
    <>
      <Header />
      <Menu />

      <main className="contenido">
        <div id="contenido_primera_fila">
          <Libro
            titulo="Soy leyenda"
            autor="Richard Matheson"
            imagen="/images/terror/soy_leyenda.jpg"
            descripcion="Robert Neville es el único superviviente de una guerra bacteriológica que ha asolado el planeta y convertido al resto de la humanidad en vampiros. Su vida se ha reducido a asesinar el máximo número posible de estos seres sanguinarios durante el día, y a soportar su asedio cada noche. Para ellos, el auténtico monstruo es este hombre que lucha por subsistir en un nuevo orden establecido."
          />
          <Libro
            titulo="Ascensión"
            autor="Nicholas Binge"
            imagen="/images/terror/ascension.webp"
            descripcion="Una enorme montaña cubierta de nieve ha aparecido en el Océano Pacífico. Nadie sabe exactamente cuándo apareció, qué tan grande podría ser o cómo explicar su existencia. Cuando Harold Tunmore, un científico de fenómenos misteriosos, es contactado por una organización en la sombra para ayudar a investigar, no tiene idea de en qué se está metiendo mientras él y su equipo parten hacia la montaña."
          />
          <Libro
            titulo="La chica gris"
            autor="Antonio Runa"
            imagen="/images/terror/la_chica_gris.webp"
            descripcion="Isaac Zarco, periodista e investigador de sucesos paranormales, no está pasando por su mejor momento. La muerte de su padre le ha afectado profundamente y ha acelerado su ruptura con Cosette, el amor de su vida. Fruto de esta profunda crisis duda de si sus habilidades psíquicas han sido reales alguna vez."
          />
        </div>

        <div id="contenido_segunda_fila">
          <Libro
            titulo="La llamada de Cthulhu"
            autor="François Baranger, H. P. Lovecraft"
            imagen="/images/terror/la_llamada_de_cthulhu.webp"
            descripcion="Con esta novela, Lovecraft escribe en los años 20 del pasado siglo una de las historias más famosas de la literatura fantástica americana. Cthulhu, el Gran Antiguo que sueña y espera en el fondo de los negros abismos oceánicos, se convertirá por sí solo en el símbolo de todo el universo que crea el autor de Providence."
          />
          <Libro
            titulo="La caída de la Casa Usher"
            autor="Edgar Allan Poe, Ismael Pinteño Visuara"
            imagen="/images/terror/la_caida_de_la_casa_usher.webp"
            descripcion="«La caída de la Casa Usher» (1839) es uno de los relatos más reconocidos de Edgar Allan Poe, un clásico del género gótico que ha inspirado a autores como Shirley Jackson y Stephen King. La historia sigue al narrador mientras visita la mansión de su amigo Roderick Usher, un lugar deteriorado que refleja la ruina emocional y física de sus habitantes. La decadencia de la casa marcará también un final de pesadilla para el linaje de los dos hermanos."
          />
          <Libro
            titulo="Luz negra"
            autor="Pedro Berruezo"
            imagen="/images/terror/luz_negra.webp"
            descripcion="Realidad y ficción se entremezclan, bañadas en una enigmática luz negra, tan oscura que parece un líquido espeso, en una trama que abarca varias eras clave de la humanidad. Todas ellas están marcadas por la amenaza de una entidad tan antigua como el propio universo, y que llega a nuestra realidad a través de objetos creados por los humanos. Uno de ellos es la novela Drácula, de Bram Stoker, cuya fama llega hasta la actualidad gracias a encarnaciones como la película muda Nosferatu, creada con intenciones ocultistas."
          />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Terror;
