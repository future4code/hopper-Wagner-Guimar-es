import React from "react";
import styled from "styled-components";
import { ChooseButtonsContainer as BtnChooseContainer } from "../Styles/styles";

export default function BtnChoose (props) {
  return (
    <BtnChooseContainer>
      <img
        className="no"
        onClick={props.onClickNo}
        src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png"
        alt="botão Não"
      />
      <img
        className="yes"
        onClick={props.onClickYes}
        src="https://cdn-icons.flaticon.com/png/512/4315/premium/4315445.png?token=exp=1654989003~hmac=20eb82aef50fed32d8d0dd329a13b5d6"
        alt="botão Sim"
      />

      {/* <button onClick={props.onClickNo}>NÃO</button>
      <button onClick={props.onClickYes}>SIM</button> */}
    </BtnChooseContainer>
  );
}
