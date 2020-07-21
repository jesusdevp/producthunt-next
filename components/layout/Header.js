import React from "react";
import Buscar from "../ui/Buscar";
import Navegacion from "./Navegacion";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div>
        <div>
          <p>P</p>
          <Buscar />

          <Navegacion />
        </div>
        <div>
          <p>Hola: Usuario</p>
          <button type="button">Cerrar Sesión</button>
          <a href="/">Login</a>
          <a href="/">Crear Cuenta</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
