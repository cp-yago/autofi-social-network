/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
import { Reducer } from 'redux';
import produce from 'immer';
import { ActionTypes, IFeedState } from './types';

const INITIAL_STATE: IFeedState = {
  posts: [],
};

const feed: Reducer<IFeedState> = (state = INITIAL_STATE, action) => produce(state, (draft) => {
  switch (action.type) {
    case ActionTypes.updateFeed: {
      const { posts } = action.payload;
      draft.posts = [...posts];
      break;
    }
    case ActionTypes.updateComments: {
      const { comments } = action.payload;
      const postIndex = draft.posts.findIndex((post) => post.id === comments[0].postId);
      draft.posts[postIndex].comments = [...comments];
      break;
    }
    default: {
      return draft;
    }
  }
});

export default feed;
