import React from "react";
import { NavBarInfo } from "../Styles/styles";

export default function AppBar(props) {
  return (
    <NavBarInfo>
      <img
        onClick={props.goToChooseProfile}
        src="https://cdn-icons-png.flaticon.com/512/740/740842.png"
      ></img>

      <p>Astromatch</p>
      <img
        onClick={props.goToMatchList}
        src="https://static.vecteezy.com/system/resources/previews/001/187/508/original/heart-png.png"
        alt="astromatch"
      />
    </NavBarInfo>
  );
}
