import React from "react";
import Header from "./components/Header";
import PlaylistCreationPage from "./components/PlaylistCreationPage";
import { AppContainer } from "../src/styles";
import PlaylistManagerPage from "./components/PlaylistManagerPage";

export default class App extends React.Component {
  state = {
    currentPage: "PlaylistCreationPage",
  };

  changePage = (currentPage) => {
    this.setState({ currentPage: currentPage });
  };

  render() {
    const renderCurrentPage = () => {
      if (this.state.currentPage === "playlistCreationPage") {
        return <PlaylistCreationPage />;
      } else if (this.state.currentPage === "playlistManagerPage") {
        return <PlaylistManagerPage />;
      }
    };

    return (
      <AppContainer>
        <Header changePage={this.changePage} />
        {renderCurrentPage()}
      </AppContainer>
    );
  }
}
