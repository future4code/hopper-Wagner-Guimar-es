import React from "react";
import styled from "styled-components";
import axios from "axios";
import { urlGeral, axiosConfig } from "../../constantes";
import {
  PlaylistCreationFormContainer,
  PlaylistCreationForm,
} from "../../styles";

class PlaylistCreationPage extends React.Component {
  state = {
    inputNameValue: "",
  };

  changeInputNameValue = (event) => {
    this.setState({ inputNameValue: event.target.value });
  };

  createPlaylist = (event) => {
    event.preventDefault();
    const body = { name: this.state.inputNameValue };
    axios
      .post(urlGeral, body, axiosConfig)
      .then(() => {
        alert("Playlist criada com sucesso!");
      })
      .catch((err) => {
        console.log(err);
      });
    this.setState({ inputNameValue: "" });
  };

  render() {
    return (
      <PlaylistCreationFormContainer>
        <h1>Criar nova Playlist</h1>
        <PlaylistCreationForm onSubmit={this.createPlaylist}>

          <input
            placeholder="Nome da Playlist"
            type="text"
            value={this.state.inputNameValue}
            onChange={this.changeInputNameValue}
          />
          <button type="submit">Criar</button>
        </PlaylistCreationForm>
      </PlaylistCreationFormContainer>
    );
  }
}

export default PlaylistCreationPage;
