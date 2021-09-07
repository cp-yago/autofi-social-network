import React, { useState } from 'react';

import {
  Container,
  PostContainer,
  Title,
  Body,
  ShowCommentsButton,
  CommentsContainer,
} from './PostStyles';

import Commentary from '../Commentary/Commentary';
import CreateCommentary from '../CreateCommentary/CreateCommentary';

const Coments = () => {
  const [showComments, setShowComments] = useState(false);

  return (
    <Container>
      <PostContainer>
        <Title>
          sunt aut facere repellat provident occaecati excepturi optio reprehenderit
        </Title>
        <Body>
          quia et suscipit\nsuscipit recusandae consequuntur expedita et cum
          \nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem
          sunt rem eveniet architecto
        </Body>
      </PostContainer>
      <ShowCommentsButton
        onClick={() => setShowComments(!showComments)}
      >
        {!showComments ? 'Show Comments' : 'Hide Comments'}
      </ShowCommentsButton>
      {showComments && (
        <>
          <CreateCommentary />
          <CommentsContainer>
            <Commentary />
            <Commentary />
            <Commentary />
            <Commentary />
          </CommentsContainer>
        </>
      )}
    </Container>
  );
};

export default Coments;
