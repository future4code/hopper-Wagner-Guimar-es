import React from "react";
import axios from "axios";
import { ResetButtonStyle} from "../Styles/styles";

export default function ResetButton() {
  const onClickReset = () => {
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:wagner-luiz/clear"
      )
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <ResetButtonStyle>
      <img src="https://cdn-icons.flaticon.com/png/512/5486/premium/5486166.png?token=exp=1654989209~hmac=db32c8209198650894e6f99893194ffe" alt="reset" onClick={onClickReset} />
      {/* <button onClick={onClickReset}>Resetar curtidas e matches</button> */}
    </ResetButtonStyle>
  );
}
