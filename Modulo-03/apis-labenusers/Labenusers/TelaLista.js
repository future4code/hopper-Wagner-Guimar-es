import axios from "axios";
import React from "react";

export default class TelaLista extends React.Component {
  state = {
    usuarios: [],
  };

  componentDidMount() {
    this.pegarUsuario();
  }

  pegarUsuario = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    axios
      .get(url, { headers: { Authorization: "wagner-luiz-hopper" } })
      .then((res) => {
        console.log(res.data);
        this.setState({ usuarios: res.data });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  deletarUsuario = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;
    axios
      .delete(url, { headers: { Authorization: "wagner-luiz-hopper" } })
      .then(() => {
        alert("Usuário Deletado com sucesso.");
        this.pegarUsuario()
      })
      .catch(() => {
        alert("Tente novamente mais tarde.");
      });
  };
  render() {
    return (
      <>
        <button onClick={this.props.filhoDois}>Trocar de Tela</button>
        {this.state.usuarios.map((usuario) => {
          return (
            <ul>
              <li>{usuario.name}</li>
              <button onClick={() => this.deletarUsuario()}>Deletar</button>
            </ul>
          );
        })}
        <h2>Tela Lista</h2>
      </>
    );
  }
}
