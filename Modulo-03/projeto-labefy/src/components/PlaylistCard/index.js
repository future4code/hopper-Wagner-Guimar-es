import React from "react";
import styled from "styled-components";
import { DeleteButton, NameContainer, PlaylistCardContainer } from "../../styles";



const PlaylistCard = (props) => {
  return (
    <PlaylistCardContainer>
      <button onClick={() => props.changePage("playlistDetail", props.playlistId)}>
        Abrir Playlist
      </button>
      <NameContainer>{props.name}</NameContainer>
      <DeleteButton
      onClick={() => props.deletePlaylist(props.playlistId)}>X</DeleteButton>
    </PlaylistCardContainer>
  );
};


export default PlaylistCard;
