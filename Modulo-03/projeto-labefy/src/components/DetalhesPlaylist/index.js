import React from "react";
import TrackCard from "../TrackCard/TrackCard";
import axios from "axios";
import { axiosConfig, urlGeral } from "../../constantes";
import { PlaylistDetailContainer, TrackCreationForm } from "../../styles";



class PlaylistDetail extends React.Component {
  state = {
    tracks: [],
    nomeDaMusica: "",
    artista: "",
    link: "",
  };

  componentDidMount() {
    this.verTracks();
    this.setState({ nomeDaMusica: "", artista: "", link: "" });
  }
  verTracks = () => {
    axios
      .get(`${urlGeral}/${this.props.playlistId}/tracks`, axiosConfig)
      .then((res) => {
        this.setState({ tracks: res.data.result.tracks });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  removerMusica = (idDaMusica) => {
    axios
      .delete(
        `${urlGeral}/${this.props.playlistId}/tracks/${idDaMusica}`,
        axiosConfig
      )
      .then((res) => {
        this.verTracks();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  changeInputValue = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  adicionarMusica = (e) => {
    e.preventDefault();
    const body = {
      name: this.state.nomeDaMusica,
      artist: this.state.artista,
      url: this.state.link,
    };
    axios
      .post(`${urlGeral}/${this.props.playlistId}/tracks`, body, axiosConfig)
      .then((res) => {
        this.verTracks();
        this.setState({ nomeDaMusica: "", artista: "", link: "" });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    // ------------------- RENDER HERE ----------------------
    console.log(this.state);
    const tracks = this.state.tracks.map((track) => {
      return (
        <TrackCard
          key={track.id}
          trackName={track.name}
          artist={track.artist}
          url={track.url}
          idDaMusica={track.id}
          removerMusica={this.removerMusica}
        />
      );
    });

    return (
      <PlaylistDetailContainer>
        <TrackCreationForm onSubmit={this.adicionarMusica}>
          <div>
            <label>Nome da Música:</label>
            <input
              placeholder="Nome da Música"
              name="nomeDaMusica"
              value={this.state.nomeDaMusica}
              onChange={this.changeInputValue}
            />
          </div>
          <div>
            <label>Artista:</label>
            <input
              placeholder="Nome do Artista"
              name="artista"
              value={this.state.artista}
              onChange={this.changeInputValue}
            />
          </div>
          <div>
            <label>Url da Música:</label>
            <input
              placeholder="Link da Música"
              name="link"
              value={this.state.link}
              onChange={this.changeInputValue}
            />
          </div>
          <button type="submit">Adicionar Música</button>
        </TrackCreationForm>
        {tracks}
        <button onClick={() => this.props.changePage("playlists", "")}>
          {" "}
          Voltar para playlists
        </button>
      </PlaylistDetailContainer>
    );
  }
}

export default PlaylistDetail;
