import React from "react";
import styled from "styled-components";

const MsgContainer = styled.div`
    height: 10vh;
    width: 100vw;
    background-color: #f4ae00;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-items: center;
    align-content: center;
    text-align: center;
padding-bottom: 20px;
gap: 20px;




  input {
    outline: none;
    border-radius: 3px;
    width: 48vw;
    height: 30px;
    margin-bottom: 8px;
    box-shadow:  4px 3px 1px black;
    color:  #f4ae00;

  }

  button {
    width: 120px;
    height: 65px;
    border-radius: 4px;
    color:  #283136;
  
    box-shadow:  4px 3px 1px black;

  }

  button:hover{
    background-color: #283136;
    transition: 0.2s ease-in-out;
    color: #f4ae00;
    cursor: pointer;
    transform: inherit;

    
  }

input::placeholder{
  color: #283136;
}

  input:hover{
    transition: 0.2s ease-in-out;
    background-color: #283136;

  }

  input:hover{
    ::placeholder{
      color: #f4ae00;
      transition: 0.2s ease-in-out;
    }
  }

  input:focus{
  ::placeholder{
color: #283136;
  }
}


  
 
`;

const ContainerGeral = styled.div`
  background-color: #f4ae00;
  width: 100vw;
  height: 90vh;
`;

const ContainerBG = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  display: flex;
  

  h3 {
    text-align: start;
    font-size: 15px;
    color: #f4ae00;
  }

  p {
    color: white;
    text-align: start;
    font-size: 10px;
  }
`;

const CaixaPreta = styled.div`
  display: flex;
  border-radius: 4px;
  background-color: #283136;

  width: 100vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: flex-start;

  h3 {
    display: flex;
    margin-bottom: 10px;
    letter-spacing: 2px;
  }
`;

const BgContainer = styled.div`
  display: flex;
  padding: 30px;
`;

const ContainerBtn = styled.div`
display: flex;
align-items: center;
align-content: center;
justify-content: center;
justify-items: center;
padding-bottom: 10px;
`;

const ContainerUser  = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
justify-items: center;
align-items: center;
align-content: center;
`; 



export default class WhatsLab extends React.Component {
  state = {
    mensagem: [
      {
        id: Date.now(),
        nome: "",
        mensagem: "",
      },
    ],

    valorNome: "",
    valorMensagem: "",
  };

  /* ---------- ON CLICK / ON CHANGE----------*/

  onChangeNome = (event) => {
    this.setState({ valorNome: event.target.value });
  };

  onChangeMensagem = (event) => {
    this.setState({ valorMensagem: event.target.value });
  };

  onClickEnviar = () => {
    const novoUsuario = {
      id: Date.now(),
      nome: this.state.valorNome,
      mensagem: this.state.valorMensagem,
    };

    const copiaMensagens = [...this.state.mensagem, novoUsuario];
    this.setState({ mensagem: copiaMensagens });
  };

  render() {
    const listaDeMensagens = this.state.mensagem.map((msg) => {
      return (
        <ContainerBG>
          <h3>{msg.nome}</h3>
          <p>{msg.mensagem}</p>
        </ContainerBG>
      );
    });

    return (
      <ContainerGeral>
        <BgContainer>
          <CaixaPreta>{listaDeMensagens}</CaixaPreta>
        </BgContainer>


        <MsgContainer>

          <ContainerUser>
          <input onChange={this.onChangeNome} placeholder="Nome"></input>

<input
  onChange={this.onChangeMensagem}
  placeholder="Mensagem"
></input>


          </ContainerUser>
 
          <ContainerBtn>
          <button onClick={this.onClickEnviar}>Enviar</button>
          </ContainerBtn>
          
        </MsgContainer>
      </ContainerGeral>
    );
  }
}
