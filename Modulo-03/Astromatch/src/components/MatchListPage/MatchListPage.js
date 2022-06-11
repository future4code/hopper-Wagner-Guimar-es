import React, { useEffect, useState } from "react";
import MatchListItem from "./MatchListItem";
import axios from "axios";
import { ListContainer } from "../Styles/styles";


export default function MatchListPage() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:wagner-luiz/matches"
      )
      .then((response) => {
        setMatches(response.data.matches);
      });
  }, []);

  return (
    <ListContainer>
      {matches.map((profile) => {
        return <MatchListItem profile={profile} />;
      })}
    </ListContainer>
  );
}
