import React from "react";
import { TrackCardContainer, TrackContainer, ArtistContainer, DeleteButton} from "../../styles";



const TrackCard = (props) => {
  return (
    <TrackCardContainer>
      <div>
        <TrackContainer>{props.trackName} - </TrackContainer>
        <ArtistContainer>{props.artist} - </ArtistContainer>
        <DeleteButton
        onClick={() => props.removerMusica(props.idDaMusica)} >X</DeleteButton>
      </div>
      <audio controls="controls">
        <source src={props.url} type=".mp3" />
      </audio>
    </TrackCardContainer>
  );
};

export default TrackCard;
