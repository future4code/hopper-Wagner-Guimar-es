import React from "react";
import Carrinho from "./components/Carrinho/Carrinho";
import Filtros from "./components/Filtros/Filtros";
import Produtos from "./components/Home/Produtos/Produtos";
import { ConjuntoDeComponentes } from "./EstiloDoApp";
import PacoteDeProdutos from "./pacoteDeProdutos";

export default class App extends React.Component {
  state = {
    filtroMinimo: 5,
    filtroMaximo: 100000,
    filtroBuscaPorNome: "",
    ordenacao: "Crescente",
    carrinho: [],
    valorTotal: 0,
  };

  // -------------------- On Changes --------------------

  manipularValordoFiltroMinimo = (event) => {
    console.log(event.target.value);
    this.setState({ filtroMinimo: event.target.value });
  };

  manipularValordoFiltroMaximo = (event) => {
    this.setState({ filtroMaximo: event.target.value });
  };
  manipularValordoFiltroBuscaPorNome = (event) => {
    this.setState({ filtroBuscaPorNome: event.target.value });
  };

  
  // -------------------- Filtros ----------------------

  filtrarProdutos = () => {
    const pacotesFiltradosMinimo = PacoteDeProdutos.filter((produto) => {
      if (this.state.filtroMinimo) {
        return produto.price >= this.state.filtroMinimo;
      }
    });

    const pacotesFiltradosMaximo = pacotesFiltradosMinimo.filter((produto) => {
      if (this.state.filtroMaximo) {
        return produto.price <= this.state.filtroMaximo;
      } else {
        return produto;
      }
    });

    const pacoteFiltrado = pacotesFiltradosMaximo.filter((produto) => {
      return produto.name.includes(this.state.filtroBuscaPorNome);
    });

    return pacoteFiltrado;
  };

  ordernarProdutos = (event) => {
    this.setState({ ordenacao: event.target.value });
  };

  removerItemDoCarrinho = (itemParaRemover) => {
    if (itemParaRemover.quantidade === 1) {
      const novoCarrinho = this.state.carrinho.filter((item) => {
        if (item.id !== itemParaRemover.id) {
          return item;
        }
      });
      console.log("Novo Carrinho", novoCarrinho);
      this.setState({
        carrinho: novoCarrinho,
      });
    } else {
      const novoCarrinho = this.state.carrinho.map((item) => {
        if (itemParaRemover.id === item.id && item.quantidade >= 1) {
          return { ...item, quantidade: item.quantidade - 1 };
        } else {
          return item;
        }
      });
      this.setState({ carrinho: novoCarrinho });
    }
    this.removerValorTotal(itemParaRemover.price);
  };

  // ------------------- Saber se ta funcionando o Dec e Cre - Select ------------------------------------------
  funcaoDeTeste = (event) => {
    console.log(event.target.value);
  };

  adicionarProdutoNoCarrinho = (produto) => {
    const produtoNoCarrinho = this.state.carrinho.filter((item) => {
      if (item.id === produto.id) {
        return item;
      }
    });
    if (produtoNoCarrinho.length === 0) {
      produto.quantidade = 1;
      const novoCarrinho = [...this.state.carrinho, produto];
      this.setState({
        carrinho: novoCarrinho,
      });
    } else {
      const novoCarrinho = this.state.carrinho.map((item) => {
        if (produto.id === item.id && item.quantidade >= 1) {
          return { ...item, quantidade: item.quantidade + 1 };
        } else {
          return item;
        }
      });
      this.setState({
        carrinho: novoCarrinho,
      });
    }
    this.adicionarValorTotal(produto.price);
  };

  adicionarValorTotal = (valor) => {
    console.log(valor);
    this.setState({ valorTotal: this.state.valorTotal + valor });
  };

  removerValorTotal = (valor) => {
    console.log(valor);
    this.setState({ valorTotal: this.state.valorTotal - valor });
  };

  render() {
    const produtosFiltrados = this.filtrarProdutos();

    return (
      <ConjuntoDeComponentes>
        {
          <Filtros
            minimo={this.state.filtroMinimo}
            maximo={this.state.filtroMaximo}
            buscaProNome={this.state.filtroBuscaPorNome}
            onChangeMinimo={this.manipularValordoFiltroMinimo}
            onChangeMaximo={this.manipularValordoFiltroMaximo}
            onChangeBuscaPorNome={this.manipularValordoFiltroBuscaPorNome}
          />
        }
        <Produtos
          quantidade={produtosFiltrados.length}
          onChangeCabecalho={this.ordernarProdutos}
          ordenacao={this.state.ordenacao}
          produtos={produtosFiltrados}
          onClick={this.adicionarProdutoNoCarrinho}
        />

        <Carrinho
          carrinho={this.state.carrinho}
          valorTotal={this.state.valorTotal}
          removerItemDoCarrinho={this.removerItemDoCarrinho}
        />
      </ConjuntoDeComponentes>
    );
  }
}


