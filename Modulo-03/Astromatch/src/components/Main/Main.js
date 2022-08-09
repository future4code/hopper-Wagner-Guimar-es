import React, { useState } from "react";
import AppBar from "../AppBar/AppBar";
import ChooseProfilePage from "../ChooseProfilePage/ChooseProfilePage";
import MatchListPage from "../MatchListPage/MatchListPage";
import { CardContainer} from "../Styles/styles";


export default function Main() {
  const [page, setPage] = useState("choose-Profile");

  const PageSectorRender = () => {
    switch (page) {
      case "choose-Profile":
        return <ChooseProfilePage />;
      case "match-list":
        return <MatchListPage />;
      default:
        return <ChooseProfilePage />;
    }
  };

  const goToChooseProfile = () => {
    setPage("choose-Profile");
  };

  const goToMatchList = () => {
    setPage("match-list");
  };

  return (
    <CardContainer>
      <AppBar
        goToChooseProfile={goToChooseProfile}
        goToMatchList={goToMatchList}
      />
      {PageSectorRender()}


    </CardContainer>
  );
}
