import React from "react";
import { Filtros, GrupoDeFiltros } from "./estiloDoFiltro";

export default class filtros extends React.Component {
  render() {
    return (
      <GrupoDeFiltros>
        <h2 className="filtros-style">filtros</h2>

        <Filtros>

          Filtro Mínimo:
          <input
            type={"number"}
            value={this.props.minimo}
            onChange={this.props.onChangeMinimo}

          />
        </Filtros>

        <Filtros>
          Filtro Máximo:
          <input
            type={"number"}
            value={this.props.maximo}
            onChange={this.props.onChangeMaximo}
          />
        </Filtros>

        <Filtros>
          Busca por nome:
          <input
            type={"text"}
            value={this.props.buscaPorNome}
            onChange={this.props.onChangeBuscaPorNome}
          />
        </Filtros>
      </GrupoDeFiltros>
    );
  }
}
