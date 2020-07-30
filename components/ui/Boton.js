import styled from "@emotion/styled";

const Boton = styled.a`
  display: block;
  font-weight: 700;
  text-transform: uppercase;
  border: 1px solid #d1d1d1;
  padding: 0.8rem 2rem;
  margin: 2rem auto;
  margin-right: 1rem;
  text-align: center;
  background-color: ${(props) => (props.bgColor ? "#da552f" : "white")};
  color: ${(props) => (props.bgColor ? "white" : "#000")};

  &:last-of-type {
    margin-right: 0;
  }

  &:hover {
    cursor: pointer;
  }

  /* @media (max-width: 976px) {
    a {
      font-size: 1.5rem;
    }
  } */
`;

export default Boton;
