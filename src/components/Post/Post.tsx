import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateComments } from '../../store/modules/feed/actions';

import {
  Container,
  PostContainer,
  Title,
  Body,
  ShowCommentsButton,
  CommentsContainer,
  IsLoadingText,
} from './PostStyles';

import Commentary from '../Commentary/Commentary';
import CreateCommentary from '../CreateCommentary/CreateCommentary';

import api from '../../services/api';
import { IState } from '../../store';
import { IComment } from '../../store/modules/feed/types';

interface IPostProps {
  id: number;
  index: number;
  title: string;
  body: string;
}

const Post = ({
  id, index, title, body,
}: IPostProps) => {
  const dispatch = useDispatch();

  const [showComments, setShowComments] = useState(false);
  const [isCommentsLoading, setIsCommentsLoading] = useState(false);

  const getComments = async () => {
    setIsCommentsLoading(true);
    const response = await api.get(`/comments/?postId=${id}`);
    if (response.data) {
      dispatch(updateComments(response.data, index));
    }
    setIsCommentsLoading(false);
  };

  const comments = useSelector<IState>((state) => state.feed.posts[index].comments) as IComment[];

  useEffect(() => {
    if (showComments) {
      getComments();
    }
  }, [showComments]);

  return (
    <Container>
      <PostContainer>
        <Title>{title}</Title>
        <Body>{body}</Body>
      </PostContainer>
      <ShowCommentsButton
        onClick={() => setShowComments(!showComments)}
        data-testid="showCommentsButton"
      >
        {!showComments ? 'Show Comments' : 'Hide Comments'}
      </ShowCommentsButton>
      {showComments && (
        <>
          <CreateCommentary
            postId={id}
            postIndex={index}
            data-testid="createCommentary"
          />
          {isCommentsLoading ? (
            <IsLoadingText>Loading comments...</IsLoadingText>
          ) : (
            <CommentsContainer data-testid="commentsContainer">
              {(comments || []).map((comment) => (
                <Commentary
                  key={comment.id}
                  name={comment.name}
                  email={comment.email}
                  body={comment.body}
                />
              ))}
            </CommentsContainer>
          )}
        </>
      )}
    </Container>
  );
};

export default Post;
