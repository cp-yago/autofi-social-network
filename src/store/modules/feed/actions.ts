import { IPost, ActionTypes, IComment } from './types';

const updateFeed = (posts: IPost[]) => ({
  type: ActionTypes.updateFeed,
  payload: {
    posts,
  },
});

const updateComments = (comments: IComment[], postIndex: number) => ({
  type: ActionTypes.updateComments,
  payload: {
    comments,
    postIndex,
  },
});

const createComment = (comment: IComment) => ({
  type: ActionTypes.createComment,
  payload: {
    comment,
  },
});

export { updateFeed, updateComments, createComment };
