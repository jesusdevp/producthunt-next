import React, { useContext } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { FirebaseContext } from "../../firebase/index";

const Nav = styled.nav`
  padding-left: 2rem;

  a {
    font-size: 1.8rem;
    margin-left: 2rem;
    color: var(--gris2);
    font-family: "PT Sans", sans-serif;
    transition: all 300ms;

    &:last-of-type {
      margin-right: 0;
    }
  }
  a:hover {
    color: var(--naranja);
    transform: scale(1.2, 1.2);
  }
  @media (max-width: 963px) {
    display: flex;
    flex-flow: nowrap column;
    justify-items: center;

    a {
      font-size: 1.6rem;
    }
  }
`;

const Navegacion = () => {
  const { usuario } = useContext(FirebaseContext);

  return (
    <Nav>
      <Link href="/">
        <a>Inicio</a>
      </Link>
      <Link href="/populares">
        <a>Populares</a>
      </Link>
      {usuario && (
        <Link href="/nuevo-producto">
          <a>Nuevo Producto</a>
        </Link>
      )}
    </Nav>
  );
};

export default Navegacion;
