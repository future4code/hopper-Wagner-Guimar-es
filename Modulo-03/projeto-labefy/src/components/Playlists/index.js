import React from "react";

import PlaylistCard from "../PlaylistCard";
import axios from "axios";
import { urlGeral, axiosConfig } from "../../constantes";
import { PlaylistsContainer } from "../../styles";


class Playlists extends React.Component {
  state = {
    playlists: []
  };

  componentDidMount() {
    this.pegarPlaylists();
  }
  pegarPlaylists = () => {
    axios
      .get(urlGeral, axiosConfig)
      .then(response => {
        this.setState({ playlists: response.data.result.list });
      })
      .catch(err => {
        console.log(err);
      });
  };

  deletePlaylist = (playlistId) => {
    axios
      .delete(`${urlGeral}/${playlistId}`, axiosConfig)
      .then((response) => {
        this.pegarPlaylists();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    const playlists = this.state.playlists.map((playlist) => {
      return (
        <PlaylistCard
          key={playlist.id}
          changePage={this.props.changePage}
          name={playlist.name}
          playlistId={playlist.id}
          deletePlaylist={this.deletePlaylist}
        />
      );
    });
    return <PlaylistsContainer>{playlists}</PlaylistsContainer>;
  }
}

export default Playlists;
