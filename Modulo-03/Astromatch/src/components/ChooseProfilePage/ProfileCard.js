import React from "react";
import { ProfileCardContainer, ProfilePicture as PictureProfile, ProfileInfo } from "../Styles/styles";


export default function ProfileCard(props) {

  const profile = props.profile;

  return (
    <ProfileCardContainer>

      <PictureProfile src={profile.photo} alt="profile" />
      <ProfileInfo>
        <p className="personal-info">{profile.name}, {profile.age}</p>
        <p className="personal-bio">{profile.bio}  </p>
      </ProfileInfo>
      
    </ProfileCardContainer>
  );
}
