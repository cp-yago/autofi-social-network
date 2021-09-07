import React from 'react';

import { Container, PostsContainer } from './HomeStyles';

import Header from '../../components/Header/Header';
import Post from '../../components/Post/Post';

const Posts = () => (
  <Container>
    <Header />
    <PostsContainer>
      <Post />
      <Post />
    </PostsContainer>
  </Container>
);

export default Posts;
