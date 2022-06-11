import axios from "axios";
import React, { useEffect, useState } from "react";
import ChooseButtons from "./ChooseButtons";
import ProfileCard from "./ProfileCard";

export default function ProfilePageChoose() {
  const [profileToChoose, ChooseSetProfile] = useState(undefined);

  const getProfile = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:wagner-luiz/person"
      )
      .then((response) => {
        console.log(response.data.profile);
        ChooseSetProfile(response.data.profile);
      });
  };

  const Choose = (choice) => {
    const body = {
      choice: choice,
      id: profileToChoose.id,
    };

    ChooseSetProfile(undefined);

    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:wagner-luiz/choose-person",
        body
      )
      .then((response) => {
        console.log(response);
        getProfile();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getProfile();
  }, []);

  const onClickNo = () => {
    Choose(false);
  };

  const onClickYes = () => {
    Choose(true);
  };

  return (
    <div>
      {profileToChoose &&
        <>
          <ProfileCard profile={profileToChoose} />
          <ChooseButtons onClickNo={onClickNo} onClickYes={onClickYes} />
        </>
      }
    </div>
  );
}
