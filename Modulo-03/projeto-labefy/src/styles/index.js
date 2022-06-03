import styled from "styled-components";
import {
  corPrimaria,
  corSecundaria,
  darkColor,
  clearColor,
} from "../constantes/index";

//import { ButtonsContainer, HeaderContainer } from "../../styles";

// HEADER

export const ContainerGeral = styled.div`
  background-color: ${darkColor};
`;

export const Promo = styled.div`
  display: flex;
  background-color: ${corSecundaria};
  height: 23px;
  box-shadow: 0px 0px 5px 1px ${darkColor};
  color: ${clearColor};
  text-align: center;
  justify-content: center;
  align-items: center;
  letter-spacing: 1px;

  p {
    font-size: 13px;
    font-family: "Josefin Sans", sans-serif;
    letter-spacing: 2px;
  }

  :hover {
    background-color: ${clearColor};
    color: ${darkColor};
    font-weight: 600;
    transition: ease-in 0.1s;
    cursor: pointer;
  }
`;

export const Chamada = styled.div`
  padding: 0px 50px 0px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Josefin Sans", sans-serif;

  h1 {
    color: ${corSecundaria};

    font-size: 60px;
    border-bottom: 5px solid ${corSecundaria};
  }
  span {
    color: ${clearColor};
  }

  h2 {
    color: ${clearColor};
    text-align: center;

    letter-spacing: 2px;
  }

  h4 {
    color: ${clearColor};
    font-family: "Josefin Sans", sans-serif;
    font-weight: 400;
    padding: 0;
    font-size: 25px;
    font-weight: 600;
    text-align: center;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  height: 60px;
  width: 100vw;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  justify-items: center;
  width: 100vw;
  justify-content: center;
  padding-bottom: 40px;

  button {
    width: 200px;
    margin: 50px;
    height: 50px;
    margin-top: 50px;
    border-radius: 5px;
    border: 2px solid ${clearColor};
    background-color: ${corSecundaria};
    color: ${clearColor};
    font-weight: 600;
    text-transform: uppercase;
    font-family: "Josefin Sans", sans-serif;
    text-align: center;
    line-height: 15px;

    :hover {
      font-size: 15px;
      transition: ease-in-out 0.1s;
      background-color: ${clearColor};
      color: ${corSecundaria};
      cursor: pointer;
      border: 2px solid ${corSecundaria};
    }
  }
`;

// PLAYLIST CARD

export const PlaylistCardContainer = styled.div`
  background-color: ${corSecundaria};
  border-radius: 4px;
  margin-top: 15px;
  padding: 15px;
  display: flex;
  align-items: center;
  border: 1px solid ${clearColor};
  justify-content: space-between;
  width: 60vw;
  height: 50px;
  button {
    background-color: ${corPrimaria};
    border: 2px solid white;
    border-radius: 4px;
    width: 150px;
    height: 60px;
    font-family: "Josefin Sans", sans-serif;
    text-transform: uppercase;
    font-weight: 800;
  }

  button:hover {
    color: white;
    box-shadow: inset 0 -100px 0 0 #725ac1;
  }

  /* 
  :hover{
    background-color: ${darkColor};
    color: ${darkColor};
    font-weight: 600;
    transition: ease-in 0.1s;
  } */
`;

export const NameContainer = styled.p`
  margin: 10px;
  font-family: "Josefin Sans", sans-serif;

  text-transform: uppercase;
  color: ${clearColor};
  font-weight: 800;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  justify-items: center;
`;

export const DeleteButton = styled.p`
  color: ${darkColor};
  background-color: ${clearColor};
  text-align: center;
  border-radius: 4px;
  display: flex;
  width: 20px;
  height: 20px;
  font-weight: 600;
  border: 3px solid ${darkColor};
  align-items: center;
  align-content: center;
  justify-content: center;
  justify-items: center;
  cursor: pointer;

  :hover {
    background-color: red;
    padding: 2px;
    color: ${clearColor};
    border: 1px solid ${clearColor};
  }
`;

// PLAYLIST CREATION PAGE

export const PlaylistCreationFormContainer = styled.div`
  background-color: ${corSecundaria};
  height: 50vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-top: 2px solid ${clearColor};

  h1 {
    font-family: "Josefin Sans", sans-serif;
    text-transform: uppercase;
    color: ${clearColor};
    margin-bottom: 50px;
  }
`;

export const PlaylistCreationForm = styled.form`
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  input {
    background-color: ${darkColor};
    width: 50vw;
    height: 30px;
    border-radius: 4px;
    border: 5px solid ${darkColor};
    outline: 1px solid ${clearColor};
    color: ${clearColor};
    text-transform: uppercase;
  }

  input::placeholder {
    color: ${clearColor};
    font-family: "Josefin Sans", sans-serif;
    text-transform: uppercase;
  }

  button {
    font-weight: 800px;
    margin: 10px;
    background-color: ${darkColor};
    color: ${clearColor};
    height: 44px;
    width: 100px;
    border-radius: 4px;
    text-transform: uppercase;
    font-family: "Josefin Sans", sans-serif;
    border: 1px solid ${clearColor};
    outline: none;
  }

  button:hover {
    background-color: ${corPrimaria};
    color: ${clearColor};
    transition: ease-in-out 0.1s;
    cursor: pointer;
  }
`;

// PLAYLIST DETAILS

export const PlaylistDetailContainer = styled.div`
  border: 2px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  justify-items: center;
  height: 100%;
  background-color: ${corSecundaria};

  button {
    font-weight: 800px;
    margin: 10px;
    background-color: ${corPrimaria};
    color: ${clearColor};
    height: 60px;
    width: 130px;
    border-radius: 4px;
    text-transform: uppercase;
    font-family: "Josefin Sans", sans-serif;
    border: 1px solid ${clearColor};
    outline: none;
  }

  button:hover {
    background-color: ${corPrimaria};
    color: ${clearColor};
    transition: ease-in-out 0.1s;
    cursor: pointer;
  }
`;

export const TrackCreationForm = styled.form`
  margin-top: 15px;
  background-color: ${darkColor};
  border: 2px solid ${clearColor};
  border-radius: 5px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  justify-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    justify-items: center;

    input {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      height: 40px;
      width: 250px;
      outline: none;
      font-family: "Josefin Sans", sans-serif;
      ::placeholder {
        font-family: "Josefin Sans", sans-serif;
        text-transform: uppercase;
        text-align: center;
      }
    }

    label {
      font-family: "Josefin Sans", sans-serif;
      color: ${clearColor};
      text-transform: uppercase;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 40px;
      width: 250px;
      text-align: center;
    }
  }

  button {
    font-weight: 800px;
    margin: 10px;
    background-color: ${corPrimaria};
    color: ${clearColor};
    height: 44px;
    width: 100px;
    border-radius: 4px;
    text-transform: uppercase;
    font-family: "Josefin Sans", sans-serif;
    border: 1px solid ${clearColor};
    outline: none;
  }

  button:hover {
    background-color: ${corPrimaria};
    color: ${clearColor};
    transition: ease-in-out 0.1s;
    cursor: pointer;
  }
`;

// PLAYLIST MANAGER PAGE

export const PlaylistManagerContainer = styled.div``;

// PLAYLISTS

export const PlaylistsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// APP JS

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: #623cea; // primary #623cea  //secondary #f45b69
`;

// TRACK CARD CONTAINER

export const TrackCardContainer = styled.div`
  margin: 20px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
    align-items: center;
  }
`;

export const TrackContainer = styled.p`
  font-family: "Josefin Sans", sans-serif;
  text-transform: uppercase;
  font-weight: 600;
`;

export const ArtistContainer = styled.p`
  margin-right: 10px;
  font-family: "Josefin Sans", sans-serif;
`;
