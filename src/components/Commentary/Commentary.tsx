import React from 'react';

import {
  Container,
  AvatarContainer,
  UserInfoContainer,
  UserName,
  UserEmail,
  CommentaryContainer,
  Body,
} from './CommentaryStyles';

interface IComment {
  name: string;
  email: string;
  body: string;
}

const Commentary = ({ name, email, body }: IComment) => (
  <Container>
    <CommentaryContainer>
      <Body>{body}</Body>
      <AvatarContainer>
        <img src="https://avatars.githubusercontent.com/u/22509891?v=4" alt="user-avatar" />
        <UserInfoContainer>
          <UserName>{name}</UserName>
          <UserEmail>{email}</UserEmail>
        </UserInfoContainer>
      </AvatarContainer>
    </CommentaryContainer>
  </Container>
);

export default Commentary;
