import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

const Contacto = () => {
  return (
    <div>
      <Header />
      <Menu />

      <main className="contenido" id="contenido_contacto">
        <form>
          <h2>¡Envíanos tu mensaje!</h2>

          <div id="nya">
            <div className="campo_form">
              <label htmlFor="nombre">Nombre:</label><br />
              <input type="text" id="nombre" name="nombre" required />
            </div>

            <div className="campo_form">
              <label htmlFor="apellido">Apellido:</label><br />
              <input type="text" id="apellido" name="apellido" required />
            </div>
          </div>

          <div className="campo_form" id="campo_form_email">
            <label htmlFor="email">Email:</label><br />
            <input type="email" id="email" name="email" required />
          </div>

          <div className="campo_form">
            <label htmlFor="mensaje">Escribí tu mensaje:</label><br />
            <textarea id="mensaje" name="mensaje"></textarea>
          </div>

          <div className="campo_form">
            <button type="submit">SUBMIT</button>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
};

export default Contacto;
