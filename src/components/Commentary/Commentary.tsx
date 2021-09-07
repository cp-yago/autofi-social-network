import React from 'react';

import {
  Container,
  AvatarContainer,
  CommentaryContainer,
  Title,
  Body,
} from './CommentaryStyles';

const Coments = () => (
  <Container>
    <CommentaryContainer>
      <Title>
        sunt aut facere repellat provident occaecati excepturi optio reprehenderit
      </Title>
      <Body>
        quia et suscipit\nsuscipit recusandae consequuntur expedita et cum
        \nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem
        sunt rem eveniet architecto
      </Body>
      <AvatarContainer>
        <img src="https://avatars.githubusercontent.com/u/22509891?v=4" alt="user-avatar" />
        <span>yago.cunha123@gmail.com</span>
      </AvatarContainer>
    </CommentaryContainer>
  </Container>
);

export default Coments;
