import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";

const Nav = styled.nav`
  padding-left: 2rem;

  a {
    font-size: 1.8rem;
    margin-left: 2rem;
    color: var(--gris2);
    font-family: "PT Sans", sans-serif;

    &:last-of-type {
      margin-right: 0;
    }
  }
`;

const Navegacion = () => {
  return (
    <Nav>
      <a href="/">Inicio</a>
      <a href="/">Populares</a>
      <a href="/">Nuevo Producto</a>
    </Nav>
  );
};

export default Navegacion;
