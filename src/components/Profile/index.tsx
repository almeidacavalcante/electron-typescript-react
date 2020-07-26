import React from "react";

import ProfileImage from "../../assets/profile.jpg";

import { Container, Name, Circular } from "./styles";

interface Profile {
  name: String;
}

interface Props {
  profile: Profile;
}

const Profile: React.FC<Props> = ({profile}) => {
  return (
    <Container>
      <Circular>
        <img src={ProfileImage} alt='Profile' />
      </Circular>
      <div>
        <span>Welcome, </span>
        <Name>{profile.name}</Name>
      </div>
    </Container>
  );
};

export default Profile;
