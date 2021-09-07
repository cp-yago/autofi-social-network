import { IPost, ActionTypes, IComment } from './types';

const updateFeed = (posts: IPost[]) => ({
  type: ActionTypes.updateFeed,
  payload: {
    posts,
  },
});

const updateComments = (comments: IComment[]) => ({
  type: ActionTypes.updateComments,
  payload: {
    comments,
  },
});

const createComment = (comment: IComment) => ({
  type: ActionTypes.createComment,
  payload: {
    comment,
  },
});

export { updateFeed, updateComments, createComment };
