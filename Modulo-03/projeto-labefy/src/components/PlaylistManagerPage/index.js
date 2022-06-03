import React from "react";
import PlaylistDetail from "../DetalhesPlaylist/index.js";
import Playlists from "../Playlists";
import { PlaylistManagerContainer } from "../../styles";

class PlaylistManagerPage extends React.Component {
  state = {
    currentPage: "playlists",
    playlistId: "",
  };

  changePage = (currentPage, playlistId) => {
    this.setState({ currentPage: currentPage, playlistId: playlistId });
  };

  render() {
    const renderCurrentPage = () => {
      if (this.state.currentPage === "playlists") {
        return <Playlists changePage={this.changePage} />;
      } else if (this.state.currentPage === "playlistDetail") {
        return (
          <PlaylistDetail
            changePage={this.changePage}
            playlistId={this.state.playlistId}
          />
        );
      }
    };

    return (
      <PlaylistManagerContainer>{renderCurrentPage()}</PlaylistManagerContainer>
    );
  }
}

export default PlaylistManagerPage;
