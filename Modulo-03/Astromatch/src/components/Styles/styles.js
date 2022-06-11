import styled from "styled-components";
import {
  corPrimaria,
  corSecundaria,
  corTerciaria,
  textoEscuro,
  textoClaro,
} from "./../variaveis/variaveis";

// App Bar

export const NavBarInfo = styled.div`
  display: flex;
  justify-content: space-between;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  align-items: center;
border-bottom: 1px solid gray;
  background-color: ${corPrimaria};

  justify-items: center;

  img {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 35px;
    padding: 10px;
  }

  img:hover {
    cursor: pointer;
    filter: drop-shadow(0px 0px 5px ${corSecundaria});
    transition: all 0.2s;
  }

  p {
    color: ${textoEscuro};
    font-size: 22px;
    font-family: "Roboto", sans-serif;
    font-weight: 800;
    padding: 2px 15px;
    text-transform: uppercase;
    border-radius: 10px;
  }
`;

// ChooseButtons
export const ChooseButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-top: 25px;

  img {
    height: 50px;
  }

  .no:hover {
    cursor: pointer;
    filter: drop-shadow(0px 0px 4px #f44336);
  }

  .yes:hover {
    cursor: pointer;
    filter: drop-shadow(0px 0px 4px #4caf50);
  }
`;

// ProfileCard

export const ProfileCardContainer = styled.div`
  margin: 16px;

  height: 450px;
  position: relative;
  img {
    border-radius: 5px;
    width: 100%;
    height: 100%;
  }
`;

export const ProfilePicture = styled.img`
  width: 100%;
  max-height: 500px;
  min-height: 400px;
  min-width: 300px;
  display: block;
`;
export const ProfileInfo = styled.div`
  margin: 16px;

  position: absolute;
  z-index: 999;
  bottom: -15px;
  width: 90%;

  p {
    filter: drop-shadow(0px 2px 2px black);
    font-size: 15px;
    text-shadow: 1px 1px 5px black;
    color: white;
    font-family: monospace;
    margin: 0;
    padding: 0;
  }

  .personal-info {
    font-size: 20px;

    text-shadow: 1px 1px 5px black;
    color: orange;
    font-weight: 800;
    font-family: monospace;
    margin: 0;
    padding: 0;

    :hover {
      font-size: 25px;
    }
  }

  .personal-bio {
    width: 100%;
    color: white;
    padding: 2px;
    font-family: monospace;

    :hover {
      color: black;
      transition: all 0.2s;
      font-weight: 800;
    }
  }
`;

// Main

// ResetButton

export const ResetButtonStyle = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  img {
    align-items: center;
    width: 50px;
    padding-bottom: 20px;
  }

  img: hover {
    cursor: pointer;
    filter: drop-shadow(0px 0px 4px ${textoClaro});
  } ;
`;
export const CardContainer = styled.div`
  width: 350px;
  height: 650px;

  border-radius: 15px;
  margin: 30px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${corSecundaria};
  background-color: ${corPrimaria};
  box-shadow: 0px 1px 1px 0px ${corSecundaria};

  p {
    text-align: start;
  }
`;

// MatchList Page

export const ListContainer = styled.div`
  padding: 8px;
`;

// MatchListItem

export const ListItemContainer = styled.div`
  display: flex;
  align-items: center;
padding: 5px;
  :hover {
    background-color: rgba(0, 0, 0, 0.3);
  }

  p {
    color: ${textoEscuro};
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    font-size: 15px;
  }
`;

export const Avatar = styled.img`
  border-radius: 50%;
  margin-right: 8px;
  height: 40px;
  width: 40px;
`;
export const ContainerBG = styled.div`
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #c91842;
  background: -moz-radial-gradient(
    center,
    #c91842 0%,
    #292c37 17%,
    #c91842 100%
  );
  background: -webkit-radial-gradient(
    center,
    #c91842 0%,
    #292c37 17%,
    #c91842 100%
  );
  background: radial-gradient(
    ellipse at center,
    #c91842 0%,
    #292c37 17%,
    #c91842 100%
  );
`;
