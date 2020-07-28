import React, { useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import Router from "next/router";

const InputText = styled.input`
  border: 1px solid var(--gris3);
  padding: 1rem;
  min-width: 300px;
`;

const InputSubmit = styled.button`
  height: 3rem;
  width: 3rem;
  display: block;
  background-size: 4rem;
  background-image: url("/static/img/buscar.png");
  background-repeat: no-repeat;
  position: absolute;
  right: 1rem;
  top: 1px;
  background-color: white;
  border: none;
  text-indent: -9999px;

  &:hover {
    cursor: pointer;
  }
`;

const Mensaje = styled.p`
  margin: 0;
  font-weight: bold;
  color: #da552f;
`;

const Buscar = () => {
  const [busqueda, guardarBusqueda] = useState("");
  const [error, guardarError] = useState(false);

  const buscarProducto = (e) => {
    e.preventDefault();

    if (busqueda.trim() === "") {
      guardarError(true);

      // Quitar mensaje de error
      setTimeout(() => {
        guardarError(false);
      }, 4000);
      return;
    }

    // redireccionar a /buscar
    Router.push({
      pathname: "/buscar",
      query: { q: busqueda },
    });
  };

  return (
    <form
      css={css`
        position: relative;
      `}
      onSubmit={buscarProducto}
    >
      <InputText
        type="text"
        placeholder="Buscar Productos"
        onChange={(e) => guardarBusqueda(e.target.value)}
      />
      <InputSubmit type="submit">Buscar</InputSubmit>
      {error ? <Mensaje>Realiza una búsqueda</Mensaje> : null}
    </form>
  );
};

export default Buscar;
