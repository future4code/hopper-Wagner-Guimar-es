import React from "react";
import CartaoDosProdutos from "../CartaoDosProdutos/CartaoDosProdutos";
import { Cabecalho, GrupoDeCartoes } from "./EstiloDosProdutos";
import PacoteDeProdutos from "../../../pacoteDeProdutos";

export default class Produtos extends React.Component {
  manipularValorSelect = (event) => {
    console.log(event.target.value);
  };

  render() {
    const produtosOrdenados =
      this.props.produtos &&
      this.props.produtos.sort((a, b) => {
        if (this.props.ordenacao === "Crescente") {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });

    const Wagner = () => {
      console.log("Wagner");
    };

    const produtosMapeados =
      produtosOrdenados &&
      produtosOrdenados.map((produto) => {
        return (
          <CartaoDosProdutos
            key={produto.id}
            imagem={produto.photo}
            nome={produto.name}
            valor={produto.price}
            onClick={() => this.props.onClick(produto)}
          />
        );
      });

    return (
      <div>
        <Cabecalho>
          <p>Quantidade de produtos: {this.props.quantidade}</p>

          <label>
            Ordenação:
            <select onChange={this.props.onChangeCabecalho}>
              <option value={"Crescente"}>Crescente</option>
              <option value={"Decrescente"}>Decrescente</option>
            </select>
          </label>
        </Cabecalho>
        <GrupoDeCartoes>{produtosMapeados}</GrupoDeCartoes>
      </div>
    );
  }
}
