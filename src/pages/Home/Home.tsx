import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFeed } from '../../store/modules/feed/actions';
import { IState } from '../../store';
import { IPost } from '../../store/modules/feed/types';

import { Container, PostsContainer } from './HomeStyles';

import Header from '../../components/Header/Header';
import Post from '../../components/Post/Post';
import api from '../../services/api';

const Posts = () => {
  const dispatch = useDispatch();

  const getPosts = async () => {
    const response = await api.get('posts');
    if (response.data) {
      dispatch(updateFeed([...response.data]));
    }
  };

  const posts = useSelector<IState>((state) => state.feed.posts) as IPost[];

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Container>
      <Header />
      <PostsContainer>
        {posts.map((postItem) => {
          const index = posts.findIndex((post) => post.id === postItem.id);
          return (
            <Post
              id={postItem.id}
              index={index}
              key={postItem.id}
              title={postItem.title}
              body={postItem.body}
            />
          );
        })}
      </PostsContainer>
    </Container>
  );
};

export default Posts;
