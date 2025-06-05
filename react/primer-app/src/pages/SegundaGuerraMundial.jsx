import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

function SegundaGuerraMundial() {
  return (
    <>
      <Header />
      <Menu />

      <div className="contenido">
        <div id="contenido_primera_fila">
          <div className="contenido_bloque">
            <h2>El día D de Churchill</h2>
            <h5>Allen Packwood, Richard Dannatt</h5>
            <img
              src="/images/segunda_guerra_mundial/el_dia_d_de_churchill.jpg"
              width="100"
              height="130"
              alt="El día D de Churchill"
            />
            <p>
              Al amanecer del 6 de junio de 1944, el desembarco de la mayor armada de buques jamás reunida comenzó a las
              6:30 horas. Durante la noche, los paracaidistas aseguraron el flanco oriental de la zona de desembarco,
              mientras que otras Divisiones Aerotransportadas estadounidenses protegían el flanco occidental para evitar
              contraataques alemanes. Cuando Gran Bretaña se despertó con la noticia del desembarco, la declaración formal
              ante la Cámara de los Comunes recayó sobre su Primer Ministro, Winston Churchill.
            </p>
          </div>

          <div className="contenido_bloque">
            <h2>La Segunda Guerra Mundial</h2>
            <h5>Gerhard L. Weinberg</h5>
            <img
              src="/images/segunda_guerra_mundial/la_segunda_guerra_mundial.webp"
              width="100"
              height="130"
              alt="La Segunda Guerra Mundial"
            />
            <p>
              En este libro Weinberg nos ofrece una magistral visión de conjunto del conflicto, que arranca de sus causas:
              el ascenso de Hitler, la crisis de Checoslovaquia, los planes de guerra de Japón…, sigue paso a paso la
              evolución de los combates, ilustrándolos con una excelente serie de mapas, y analiza, al propio tiempo, el
              impacto que la guerra tuvo en la vida cotidiana de la población civil.
            </p>
          </div>

          <div className="contenido_bloque">
            <h2>El hombre en el castillo</h2>
            <h5>Philip K. Dick</h5>
            <img
              src="/images/segunda_guerra_mundial/el_hombre_en_el_castillo.webp"
              width="100"
              height="130"
              alt="El hombre en el castillo"
            />
            <p>
              Una de las distopías más emblemáticas de todos los tiempos: ¿Qué hubiese pasado si Hitler hubiera ganado la
              Segunda Guerra Mundial?
            </p>
          </div>
        </div>

        <div id="contenido_segunda_fila">
          <div className="contenido_bloque">
            <h2>Los niños de la estrella amarilla</h2>
            <h5>Mario Escobar</h5>
            <img
              src="/images/segunda_guerra_mundial/los_niños_de_la_estrella_amarilla.gif"
              width="100"
              height="130"
              alt="Los niños de la estrella amarilla"
            />
            <p>
              La historia de un par de niños judíos que llegan a un pueblo mayormente protestante después de atravesar
              Francia por sí solos en busca de sus padres, en medio de una persecución contra judíos extranjeros. La
              situación se complica cuando Francia Libre cae en manos de los nazis, que intentan apresar a los niños.
            </p>
          </div>

          <div className="contenido_bloque">
            <h2>El diario de Ana Frank</h2>
            <h5>Ana Frank</h5>
            <img
              src="/images/segunda_guerra_mundial/diario_de_ana_frank.webp"
              width="100"
              height="130"
              alt="El diario de Ana Frank"
            />
            <p>
              Tras la invasión de Holanda, los Frank, comerciantes judíos alemanes, emigrados a Ámsterdam en 1933, se
              ocultaron de la Gestapo en un altillo anexo al edificio donde estaban las oficinas en las que trabajaba el
              padre de Ana. En total, eran ocho personas y permanecieron ocultas allí desde junio de 1942 hasta agosto de
              1944, fecha en que fueron detenidos y enviados a campos de concentración.
            </p>
          </div>

          <div className="contenido_bloque">
            <h2>La guerra no tiene rostro de mujer</h2>
            <h5>Svetlana Alexievich</h5>
            <img
              src="/images/segunda_guerra_mundial/la_guerra_no_tiene_rostro_de_mujer.webp"
              width="100"
              height="130"
              alt="La guerra no tiene rostro de mujer"
            />
            <p>
              Casi un millón de mujeres combatieron en las filas del Ejército Rojo durante la Segunda Guerra Mundial, pero
              su historia nunca ha sido contada. Este libro reúne los recuerdos de cientos de ellas: mujeres que fueron
              francotiradoras, condujeron tanques o trabajaron en hospitales de campaña.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default SegundaGuerraMundial;
