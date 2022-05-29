import React from "react";
import { ConjuntoDeItens } from "./EstiloDosItens";


export default class Itens extends React.Component {
  render() {
    return <ConjuntoDeItens>

        <p>{this.props.quantidade}X </p>
        <p>{this.props.nome}</p>
        <button onClick={this.props.onClick}>Remover</button>
    </ConjuntoDeItens>;
  }
}
