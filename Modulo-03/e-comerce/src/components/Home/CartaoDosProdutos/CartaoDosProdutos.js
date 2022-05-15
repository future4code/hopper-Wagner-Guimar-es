import React from "react";
import { TextoDoCartao, Cartao } from "./EstiloDoCartao";


export default class CartaoDosProdutos extends React.Component {
  render() {
    return (
      <Cartao>
        
        <img src={this.props.imagem} />

        <TextoDoCartao>
          <p>{this.props.nome}</p>
          <p>R$ {this.props.valor},00</p>
          <button  onClick={this.props.onClick}>Adicionar ao carrinho</button>
        </TextoDoCartao>
      </Cartao>
    );
  }
}
