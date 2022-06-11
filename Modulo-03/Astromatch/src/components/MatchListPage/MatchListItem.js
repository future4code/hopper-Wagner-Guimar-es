import React from "react";
import { Avatar, ListItemContainer } from "../Styles/styles";


export default function MatchListItem(props) {

const listaDeMatches = props.listaDeMatches;
const profile = props.profile;

  return (
    <ListItemContainer>
      <Avatar src={profile.photo} />
      <p>{profile.name}</p>
    </ListItemContainer>
  );
}
