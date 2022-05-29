import styled from "styled-components";

export const Cartao = styled.div`
  display: flex;
  border: 4px solid white;
  flex-direction: column;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  border-radius: 49px;
  background: #5a318c;
  box-shadow: -5px 5px 7px #241438, 5px -5px 7px #904ee0;
  img {
    width: 388px;
    height: 525px;

    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
  }
`;

export const TextoDoCartao = styled.div`
  display: flex;
  flex-direction: column;
  height: 120px;

  p {
    font-family: "Koulen", cursive;
    text-align: center;
    font-size: 17px;
    color: white;
  }

  /* button {
    cursor: pointer;
    border-style: none;
    border-radius: 10px;
    height: 40px;
    margin: 10px;
    align-self: center;
    width: 70%;
  } */

  button {
    --bg: yellow;
    --text-color: #5a318c;
    font-family: "Fjalla One", sans-serif;
    font-weight: 400;
    display: flex;
    text-align: center;
    align-items: center;
    align-content: center;
    height: 40px;
    align-self: center;
    justify-self: center;
    position: relative;
    width: 125px;
    border: none;
    background: var(--bg);
    color: var(--text-color);
    padding: 1em;
    font-weight: bold;
    text-transform: uppercase;
    transition: 0.2s;
    border-radius: 5px;
    opacity: 0.8;
    letter-spacing: 1px;
    box-shadow: white 0px 7px 2px, #000 0px 8px 5px;
  }

  button:hover {
    opacity: 1;
    cursor: pointer;
  }

  button:active {
    top: 4px;
    box-shadow: #f2ebba 0px 3px 2px, #000 0px 3px 5px;
  }
`;

//#405ac4
