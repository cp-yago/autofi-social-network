import React from 'react';

import { Container, PostsContainer } from './PostsStyles';

import Header from '../../components/Header/Header';
import PostItem from './PostItem/PostItem';

const Posts = () => (
  <Container>
    <Header />

    <PostsContainer>
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
    </PostsContainer>
  </Container>
);

export default Posts;
