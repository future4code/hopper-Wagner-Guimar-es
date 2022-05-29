import React from "react";
import { Promo, ButtonsContainer, HeaderContainer, Chamada, ContainerGeral } from "../../styles";

const Header = (props) => {
  return (
    <ContainerGeral>

    <Promo>
      <p>Se inscreva hoje mesmo por apenas R$9,99</p>
    </Promo>

      <Chamada>
        <h1>LABE<span>FY</span></h1>
        <h2>Venha conhecer a maior plataforma de música do Mundo!</h2>
        <h4>Confira algumas funcionalidades exclusivas</h4>

      </Chamada>
      <HeaderContainer>
        <ButtonsContainer>
          <button onClick={() => props.changePage("playlistCreationPage")}>
            Cadastrar Playlist
          </button>

          <button onClick={() => props.changePage("playlistManagerPage")}>
            Gerenciar Playlist
          </button>
        </ButtonsContainer>
      </HeaderContainer>
    </ContainerGeral>
  );
};

export default Header;
