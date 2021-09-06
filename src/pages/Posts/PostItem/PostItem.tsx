import React from 'react';

import {
  Container, AvatarContainer, CommentContainer, CommentTitle, CommentBody,
} from './PostItemStyles';

const Coments = () => (
  <Container>
    <AvatarContainer>
      <img src="https://avatars.githubusercontent.com/u/22509891?v=4" alt="user-avatar" />
      <span>Yago Cunha</span>
    </AvatarContainer>
    <CommentContainer>
      <CommentTitle>
        sunt aut facere repellat provident occaecati excepturi optio reprehenderit
      </CommentTitle>
      <CommentBody>
        quia et suscipit\nsuscipit recusandae consequuntur expedita et cum
        \nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem
        sunt rem eveniet architecto
      </CommentBody>
    </CommentContainer>
  </Container>
);

export default Coments;
