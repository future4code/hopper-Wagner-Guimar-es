import styled from "styled-components";

export const Cabecalho = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;

  p {
    color: white;
    margin-top: 5px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: "Fjalla One", sans-serif;
    letter-spacing: 1px;
  }

  label {
    color: white;
    font-size: 12px;
    text-transform: uppercase;
    font-family: "Fjalla One", sans-serif;
    letter-spacing: 1px;
  }

  select{
      background-color: #d5be2a;

      height: 25px;
      text-align: center;
      font-family: "Fjalla One", sans-serif;
      text-transform: uppercase;
      font-size: 12px;

  }
`;

export const GrupoDeCartoes = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  margin-top: 10px;
  margin: 60px 0;
`;
