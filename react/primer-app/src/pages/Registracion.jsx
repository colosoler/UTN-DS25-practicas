 // Asegurate de tener el logo en esta ruta
import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

const Registracion = () => {
  return (
    <div>
        <Header />
        <Menu />

      <main className="contenido" id="contenido_registracion">
        <form>
          <h2>Formulario de registración</h2>

          <div className="campo_form">
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required />
          </div>

          <div className="campo_form">
            <label htmlFor="apellido">Apellido:</label>
            <input type="text" id="apellido" name="apellido" required />
          </div>

          <div className="campo_form">
            <label htmlFor="fecha_de_nacimiento">Fecha de nacimiento:</label>
            <input type="date" id="fecha_de_nacimiento" name="fecha_de_nacimiento" required />
          </div>

          <div className="campo_form">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="campo_form">
            <label htmlFor="contrasena">Contraseña:</label>
            <input type="password" id="contrasena" name="contrasena" required />
          </div>

          <div className="campo_form">
            <fieldset>
              <legend>Sexo:</legend>
              <input type="radio" id="sexo_masculino" name="sexo" value="masculino" />
              <label htmlFor="sexo_masculino">Masculino</label>
              <input type="radio" id="sexo_femenino" name="sexo" value="femenino" />
              <label htmlFor="sexo_femenino">Femenino</label>
            </fieldset>
          </div>

          <div className="campo_form">
            <label htmlFor="temas_favoritos">Temas favoritos:</label>
            <select id="temas_favoritos" name="temas_favoritos" multiple>
              <option value="terror">Terror</option>
              <option value="ciencia_ficcion">Ciencia Ficción</option>
              <option value="segunda_guerra_mundial">Segunda guerra mundial</option>
              <option value="novela_literaria">Novela literaria</option>
            </select>
          </div>

          <div className="campo_form">
            <button type="submit">Registrarse</button>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
};

export default Registracion;
